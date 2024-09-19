import React from 'react'
import { Container, Grid } from '@mui/material'
import mobileFrame from '../../assets/image/mobile_frame_svg.svg'
import CircleIcon from '@mui/icons-material/Circle';

const Mobile = () => {
    return (
        <>
            <div className="mobile">
                <Container>
                    <div className="mobile_wrapper">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={7}>
                                <h4>Elevate Your Networking With Smart Whay</h4>

                                <div className="info_container border_bottom">
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div className="info_item">
                                                    <div className="item_left">
                                                        <div className="dot">
                                                          <CircleIcon/>
                                                        </div>
                                                    </div>
                                                    <div className="item_right">
                                                        <h5>Your Smart Card, Your Identity</h5>
                                                        <p>This title line emphasizes the importance of smart cards as a way to store and protect personal identity information.</p>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="info_item">
                                                    <div className="item_left">
                                                        <div className="dot clr_2">
                                                          <CircleIcon/>
                                                        </div>
                                                    </div>
                                                    <div className="item_right">
                                                        <h5>NFC Enable Card</h5>
                                                        <p>This title line emphasizes the importance of smart cards as a way to store and protect personal identity information.</p>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className="info_container info_padding">
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div className="info_item">
                                                    <div className="item_left">
                                                        <div className="dot clr_3">
                                                          <CircleIcon/>
                                                        </div>
                                                    </div>
                                                    <div className="item_right">
                                                        <h5>QR Code Enable Card</h5>
                                                        <p>This title line emphasizes the importance of smart cards as a way to store and protect personal identity information.</p>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="info_item">
                                                    <div className="item_left">
                                                        <div className="dot clr_4">
                                                          <CircleIcon/>
                                                        </div>
                                                    </div>
                                                    <div className="item_right">
                                                        <h5>The Smart Card Revolution</h5>
                                                        <p>This title line emphasizes the importance of smart cards as a way to store and protect personal identity information.</p>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                            </Grid>
                            <Grid item xs={5}>
                                <div className="mobile_container">
                                    <img src={mobileFrame} alt="" />
                                    <div className="image_preview">
                                        <div className="profile">

                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Mobile