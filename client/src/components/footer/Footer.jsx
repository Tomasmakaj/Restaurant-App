import React from 'react'
import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer'className='footer'>
            <div className='col created-by'>
                    <h1>Created By</h1>
                    <div className='col'>
                    <h3>Tomas Makaj</h3>
                    <a href="https://www.linkedin.com/in/tomasmakaj/" target="_blank"><FaLinkedinIn className='icon' /></a>
                    <a href="https://github.com/Tomasmakaj" target="_blank"><FaGithub className='icon' /></a>
                </div>
                
                <div className='col'>
                    <h3>Carlos Lugo</h3>
                    <a href="https://www.linkedin.com/in/carlos-a-lugo/" target="_blank"><FaLinkedinIn className='icon' /></a>
                    <a href="https://github.com/calugo71" target="_blank"><FaGithub className='icon' /></a>
                    
                </div>
                </div>
                <div>
                
                <div className='col'>
                    <h1>Locations</h1>
                    <a> 200 Broadway St, New York, NY 10038 | </a>
                    <a> 409 Fulton St, Brooklyn, NY 11201 | </a>
                    <a> 1 W 125th St, New York, NY 10027 </a>

                </div>

                </div>
            </div>
            


    )
}

export default Footer