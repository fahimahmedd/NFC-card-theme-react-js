import React from 'react'
import { Container, Grid } from '@mui/material'
import ellips from '../../assets/image/Ellipse-2.svg'
import demo1 from '../../assets/image/demo1.png'
import demo2 from '../../assets/image/demo2.png'
import CheckIcon from '@mui/icons-material/Check';


const Dark = () => {
    return (
        <>
            <div className="dark">
                <div className="ellips">
                    <img src={ellips} alt="" />
                </div>
                <Container>
                    <div className="dark_top">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <h2>100,000 +</h2>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="d_text">
                                    Customer <br /> Using our smart Card
                                </div>
                                <p>This title line emphasizes the importance of smart cards as a way to store and protect personal identity information.This title line emphasizes the importance</p>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="dark_middle">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <div className="middle_left">
                                    <div className="sec_head">
                                        Contactless Sharing
                                    </div>
                                    <h3>Smart business cards enable <br /> contactless sharing of information</h3>
                                    <p>With NFC technology or QR codes, professionals can instantly exchange their contact details, eliminating the need for manual data entry. Unlike traditional cards that become outdated quickly, smart business cards can offer real-time updates. If your phone number or email address changes, your contacts will always have access to the most current information.</p>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="middle_right">
                                    <img src={demo1} alt="" />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="dark_bottom">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <div className="bottom_left">
                                    <img src={demo2} alt="" />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="bottom_right">
                                    <div className="sec_head">
                                        Contactless Sharing
                                    </div>
                                    <h3>Smart cards can include multimedia elements like photos , videos, links to socialplatform and also can add your curriculam activites (CV) </h3>
                                    <p>Unlike traditional cards that become outdated quickly, smart business cards can offer real-time updates. If your phone number or email address changes, your contacts will always have access to the most current information.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="tag_content">
                                    <div className="tag_line">
                                        <i><CheckIcon /></i> Multimedia Content
                                    </div>
                                    <div className="tag_line">
                                        <i><CheckIcon /></i> Environmental Friendliness
                                    </div>
                                    <div className="tag_line">
                                        <i><CheckIcon /></i> Analytics
                                    </div>
                                    <div className="tag_line">
                                        <i><CheckIcon /></i> Eco-Friendly
                                    </div>
                                </div>
                </Container>
            </div>
        </>
    )
}
export default Dark