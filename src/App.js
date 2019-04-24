import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';
import ShowColor from './components/showcolor/ShowColor';
import Particles from 'react-particles-js';

const defineParticle = {
    particles: {
      number:{
        value:150,
        density: {
          enable: true,
          value_area: 1000
        }
      }
    }
}


const app = new Clarifai.App({
  apiKey: 'e74059d2bdd44d828d51667cdf8b477d'
 });



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      imgColor: ''
    }
  }


 inputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  faceCalculator = (data) => {
    const newData = data.outputs[0].data.regions.map(result=> result.region_info.bounding_box);  
    const image = document.getElementById('faceImg');
    const height = Number(image.height);
    const width = Number(image.width);

    this.setState({
      box: {
            leftCol :newData[0].left_col * width,
            topRow : newData[0].top_row * height,
            rightCol: width - (newData[0].right_col * width),
            bottomRow: height - (newData[0].bottom_row * height)
          },
    })
  }

  colorCalculator =(data) =>{
    const color = data.outputs[0].data.colors[0].raw_hex;
    this.setState({imgColor: color});
    console.log(this.state.imgColor);
  }


  buttonChange = (event) => {
    this.setState({
      imageURL: this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.faceCalculator(response))
    .catch(err => console.log(err))

    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", this.state.input)
    .then(response => this.colorCalculator(response))
    .catch(error=>console.log(error))
    
  }
  

  onRoutechange = (route) => {

    this.setState({
      route: route
    });

    if(route==='home'){
      this.setState({ isSignedIn : true })
    }else{
      this.setState({ isSignedIn : false })
    }

  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' params={defineParticle} />
        <Navigation onRoutechange={this.onRoutechange} isSignedIn={this.state.isSignedIn} />
        { this.state.route==='home'?
            <div>
              <Logo />
              <div className='main'>
                <Rank />
                <ImageLinkForm inputChange = {this.inputChange} buttonChange = {this.buttonChange}/>
                <FaceRecognition iamgeURL = {this.state.imageURL} box={this.state.box} />
                <ShowColor imgColor={this.state.imgColor} />
              </div>
            </div> 

          : (
            this.state.route==='signin'?
            <div className='signin-container'> 
              <SignIn onRoutechange={this.onRoutechange} /> 
            </div>
            :
            <div className='signin-container'> 
              <Register onRoutechange={this.onRoutechange} />
            </div>
          ) 
            
      }
      </div>
    );
  }  
}

export default App;
