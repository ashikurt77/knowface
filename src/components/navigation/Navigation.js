import React from 'react';
import './navigation.css'

const Navigation = ({onRoutechange,isSignedIn}) => {
    
    if(isSignedIn === true){
        return (
            <div className='nav-container'>
                <p onClick={()=>{onRoutechange('signin')}} className='pointer nav-btn-2'>Sign Out</p>
            </div>
        )
    } else {
        return(
            <div className='nav-container'>
                <p onClick={()=>{onRoutechange('signin')}} className='pointer nav-btn-1 '>Sign In</p>
                <p onClick={()=>{onRoutechange('register')}} className='pointer nav-btn-2'>Register</p>
            </div>
        )
    }

}

export default Navigation;