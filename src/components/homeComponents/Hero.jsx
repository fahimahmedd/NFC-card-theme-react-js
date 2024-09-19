import { Container, Grid } from '@mui/material'
import man1 from '../../assets/image/man1.webp'
import React, { useState, useEffect } from 'react';


const Hero = () => {
    const [stickyHero, setstickyHero] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setstickyHero('sticky-hero-1') : setstickyHero('');
    }
  };


    return (
        <>
            <div className={`hero ${stickyHero}`}>
                <Container>
                    <div className="hero_wrapper">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={7}>
                                <div className="hero_content">
                                    <div className="key_tag">NFC Digital Smart Card</div>
                                    <h1>A smart way <br /> to create Network  <br /> & Connect with others </h1>
                                    <p>A smart business card is a physical business card that includes technology such as QR codes or NFC chips. These cards can be scanned or tapped to access contact information or interactive content.</p>
                                    <div className="hero_buttons">
                                        <div className="btn_one">
                                           Buy Card
                                        </div>
                                        <div className="btn_one btn_two">
                                           Learn more
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className="slider_img">
                                    <img src={man1} alt="" />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Hero