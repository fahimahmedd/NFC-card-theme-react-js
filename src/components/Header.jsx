import { Container } from '@mui/material'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import ClearAllIcon from '@mui/icons-material/ClearAll';


const Header = () =>{
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 300 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <> 
     <div className={`header ${stickyClass}`} >
        <Container>
            <div className="header_wrapper">
                <div className="header_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header_content">
                    <ul>
                        <li><Link> Home </Link></li>
                        <li><Link to='/about'> About </Link></li>
                        <li><Link> Contant </Link></li>
                    </ul>
                    <div className="login_btn">
                        Login
                    </div>
                </div>
                <div className="hambarger">
                  <ClearAllIcon/>
                </div>
            </div>
        </Container>
     </div>
    </> 
  )
}
export default Header