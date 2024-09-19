import { Container } from '@mui/material'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import profile from '../../assets/image/user.jpeg'


const Review = () => {
    return (
        <>
            <div className="review">
                <Container>
                    <div className="review_wrapper">
                        <div className="rev_tag">
                            <span>Customer Satisfaction</span>
                        </div>
                        <h2>Testimonials 😍</h2>
                        <h3>Here from our happy Customers. They are already using our product <br /> and happy to share their feelings with us.</h3>
                    </div>
                    <div className="review_slider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="review_item">
                                    <div className="item_content">
                                         <div className="review_text">
                                            <span>"</span>
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam a voluptate corrupti dignissimos magnam esse impedit atque, sit ipsum voluptatum!
                                            <span>"</span>
                                         </div>
                                         <div className="reviewer_profile">
                                             <div className="profile_img">
                                                 <img src={profile} alt="" />
                                             </div>
                                             <div className='content_div'>
                                                <div className="profile_name">
                                                    Naeem Munshi
                                                </div>
                                                <div className="profile_desgination">
                                                    <span>CEO</span> Of <span>DMK LTD.</span>
                                                </div>
                                             </div>
                                         </div>
                                    </div>
                                    <div className="item_bottom">
                                    <div className="star_contant">
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                      </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="review_item">
                                    <div className="item_content">
                                         <div className="review_text">
                                            <span>"</span>
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam a voluptate corrupti dignissimos magnam esse impedit atque, sit ipsum voluptatum!
                                            <span>"</span>
                                         </div>
                                         <div className="reviewer_profile">
                                             <div className="profile_img">
                                                 <img src={profile} alt="" />
                                             </div>
                                             <div className='content_div'>
                                                <div className="profile_name">
                                                    Naeem Munshi
                                                </div>
                                                <div className="profile_desgination">
                                                    <span>CEO</span> Of <span>DMK LTD.</span>
                                                </div>
                                             </div>
                                         </div>
                                    </div>
                                    <div className="item_bottom">
                                    <div className="star_contant">
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                       <i><StarIcon/></i>
                                      </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Review