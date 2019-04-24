import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({iamgeURL,box}) => {
    return (
        <div> 
            <div className='face-container'>
                <img id='faceImg' className = 'faceImg' src={iamgeURL} alt='' />
                <div style ={{left:box.leftCol, top:box.topRow, bottom:box.bottomRow, right:box.rightCol}}
                 className='facebox'></div>
                 {/* <div style ={{left:box1.leftCol, top:box1.topRow, bottom:box1.bottomRow, right:box1.rightCol}}
                 className='facebox'></div> */}
            </div>      
        </div>
    )
}

export default FaceRecognition;