import React from 'react';
import './showcolor.css';

const ShowColor = ({imgColor}) => {
    if(imgColor.length ===0){
        return <div></div>
    } else {
        return (
            <div>
                <p>Primary color of the image is: {imgColor} </p>
                <div className="showcolor" style={{"background":imgColor}}></div>
            </div>
            
        )
    }
    
}

export default ShowColor;