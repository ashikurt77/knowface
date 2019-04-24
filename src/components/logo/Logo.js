import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import face from './face.png';

const Logo = () => {
    return (
        <div className = 'logo'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 45 , scale : 1.1}} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> <img src= {face} width='80' height='80' alt="logo"/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;