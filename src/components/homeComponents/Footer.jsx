import React from 'react'
import { Container, Grid } from '@mui/material'
import facebook from '../../assets/image/facebook.png'
import watsapp from '../../assets/image/whatsapp.png'
import linkedin from '../../assets/image/linkedin.png'
import twitter from '../../assets/image/twitter.png'
import logo from '../../assets/image/LogoW.png'


const Footer = () => {
  return (
    <>
      <div className="follow_part">
        <Container>
          <div className="follow_wrapper">
            <Grid container alignItems="center">
              <Grid item lg={3} md={3} xs={6}>
                <a href="#">
                  <div className="follow_item">
                    <img src={facebook} alt="" />
                    <div className="f_title">
                      Follow Us On Facebook
                    </div>
                    <div className="f_text">
                      Latest news and updates
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item lg={3} md={3} xs={6}>
                <a href="#">
                  <div className="follow_item">
                    <img src={watsapp} alt="" />
                    <div className="f_title">
                      Contact Us By Watsapp
                    </div>
                    <div className="f_text">
                      Talk with our support team
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item lg={3} md={3} xs={6}>
                <a href="#">
                  <div className="follow_item">
                    <img src={linkedin} alt="" />
                    <div className="f_title">
                      Follow Us On Linkedin
                    </div>
                    <div className="f_text">
                      Latest news and updates
                    </div>
                  </div>
                </a>
              </Grid>
              <Grid item lg={3} md={3} xs={6}>
                <a href="#">
                  <div className="follow_item border_none">
                    <img src={twitter} alt="" />
                    <div className="f_title">
                      Follow Us On Twitter
                    </div>
                    <div className="f_text">
                      Latest news and updates
                    </div>
                  </div>
                </a>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div className="footer">
        <div className="footer_content">
          <Container>
               <div className="footer_wrapper">
               <h2> Honesty In Our DNA !  </h2>
                  <Grid container spacing={2}>
                      <Grid item lg={4} xs={12}>
                          <div className="footer_wrap">
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque placeat quaerat fuga culpa perferendis temporibus ipsam. Autem magni officiis laudantium. Aliquam ratione officiis consequatur sit, cum magni dolores tempore quo obcaecati. </p>
                          </div>
                      </Grid>
                      <Grid item lg={2} xs={4}>
                          <div className="footer_wrap">
                              <h4> Learn more </h4>
                              <ul>
                                <li><a href="#"> Home </a></li>
                                <li><a href="#"> About </a></li>
                                <li><a href="#"> Contact </a></li>
                                <li><a href="#"> Terms of Us </a></li>
                                <li><a href="#"> Privecy & Policy </a></li>
                              </ul>
                          </div>
                      </Grid>
                      <Grid item lg={3} xs={4}>
                          <div className="footer_wrap">
                              <h4> Get In Touch </h4>
                              <h5>Mostofa road 7/88 link road Kamar para Farmgate 1217</h5>
                          </div>
                      </Grid>
                      <Grid item lg={3} xs={4}>
                          <div className="footer_wrap">
                              <h4> Our Newsletter </h4>
                              <h5>Subscribe to our newsletter to get our news and deal delivered to you.</h5>
                               <div className="subscribe_input">
                               <input type="text" placeholder="Enter your E-mail" class="from_control"/>
                               <div class="subscribe_btn">
                                    Subscribe
                                </div>
                               </div>
                          </div>
                      </Grid>
                  </Grid>
               </div>
          </Container>
        </div>
        <div className="copyright">
          <span> All data reserved @ by Fahim Ahmed </span>
        </div>
      </div>
    </>
  )
}
export default Footer