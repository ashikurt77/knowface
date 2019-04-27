import React from 'react';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            signInEmail : "",
            signInPass : "",
            signInError : ""
        }
    }

    onEmailChange = (event) => {
        this.setState({
            signInEmail: event.target.value
        })
    }

    onPassChange = (event) => {
        this.setState({
            signInPass : event.target.value
        })
    }

    onSubmit = () => {
        fetch("http://localhost:3000/signin", {
            method : "post",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.signInEmail,
                password : this.state.signInPass
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === "success"){
                this.props.onRoutechange("home");
            } else{
                this.setState({ signInError : "Wrong Email or Password" });
            }
        });       
    }

    render() {
        const { onRoutechange } = this.props;
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPassChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input onClick={()=>{this.onSubmit()}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div> <p> {this.state.signInError} </p>  </div>
                        <div className="lh-copy mt3">
                        <a onClick={()=>{onRoutechange('register')}} href="#0" className="f6 link dim black db">Register</a>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default SignIn;