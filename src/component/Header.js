import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <div className='header_content'>
            <div className='logo'>
                <p>New</p>
                <p>York</p>
                <p>Times</p>
            </div>
           
            <div className='nav-links'>
                <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    
                    <li>
                      <Link to='/article'>Articles</Link>
                    </li> 

                    <li>
                     <Link to='/sports'>Sports</Link>
                    </li>
                    
                    <li>
                      <Link to='/contact'>Profile</Link>
                    </li>
                </ul>
            </div>
          </div>
       </div>
    )
}

export default Header
