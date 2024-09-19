import { Container, Grid } from '@mui/material'
import card from '../../assets/image/card.png'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Buy = () => {
    return (
        <>
            <div className="buy">
                <Container>
                    <h4>Which Card You Want to buy ?</h4>
                    <div className="buy_wrapper">
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <div className="buy_wrap">
                                    <div className="card_img">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation]}
                                            className="mySwiper" >
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="card_content">
                                        <h5>Paper Card With QR Code</h5>
                                        <p>Lorem ipsum dolor sit amet elit. Amet nesciunt possimus at natus inventore</p>

                                        <div className="pricing">
                                            1200 <span>TK</span>
                                        </div>

                                        <div className="buy_btn">
                                            <Link>
                                            <div className="btn">
                                               Buy Now
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={3}>
                                <div className="buy_wrap">
                                    <div className="card_img">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation]}
                                            className="mySwiper" >
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="card_content">
                                        <h5>Plastic Card With QR Code</h5>
                                        <p>Lorem ipsum dolor  nesciunt possimus at natus inventore</p>

                                        <div className="pricing">
                                            600 <span>TK</span>
                                        </div>

                                        <div className="buy_btn">
                                            <Link>
                                            <div className="btn">
                                               Buy Now
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={3}>
                                <div className="buy_wrap">
                                    <div className="card_img">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation]}
                                            className="mySwiper" >
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="card_content">
                                        <h5>Plastic Card With NFC</h5>
                                        <p>Lorem ipsum dolor sit amet elit. Amet nesciunt possimus at natus inventore</p>

                                        <div className="pricing">
                                            1200 <span>TK</span>
                                        </div>

                                        <div className="buy_btn">
                                            <Link>
                                            <div className="btn">
                                               Buy Now
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={3}>
                                <div className="buy_wrap">
                                    <div className="card_img">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation]}
                                            className="mySwiper" >
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card_preview">
                                                    <img src={card} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="card_content">
                                        <h5>Full Custom Card</h5>
                                        <p>Lorem ipsum dolor ss at natus inventore</p>

                                        <div className="pricing">
                                            1200 <span>TK</span>
                                        </div>

                                        <div className="buy_btn">
                                            <Link>
                                            <div className="btn">
                                               Buy Now
                                            </div>
                                            </Link>
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
export default Buy