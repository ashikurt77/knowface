import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({inputChange, buttonChange}) => {
    return (
        <div>
            <p className='f3' style={{'fontWeight':'bold'}}>
                {'This Magic Site Will Find Faces In Your Picture'}
            </p>
            <div className='img-container shadow-5'>
                <input className='img-input shadow-5' type="text" placeholder='Put Your Image URL' onChange = {inputChange}/>
                <button className='img-btn shadow-5' onClick = {buttonChange}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;