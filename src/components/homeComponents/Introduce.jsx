import React from 'react'
import { Container } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';


const Introduce = () =>{
  return (
    <> 
     <div className="introduce">
        <Container>
             <div className="introduce_wrapper">
                 <div className="place_text">
                     <h2>NFC +</h2>
                 </div>
                 <div className="introduce_main_content">
                 <div className="introduce_tagline">
                     The Future of Networking: Smart Business Cards
                 </div>
                  <h3>Revolutionize your networking <br /> with smart business cards</h3>
                  <p>In a world where first impressions matter more than ever, smart business cards empower you to make a strong impact while keeping up with the pace of the digital age. Experience the convenience, efficiency, and effectiveness of smart networking today. Elevate your networking game with smart business cards – the future of connection and collaboration.</p>
                 
                  <div className="tag_content">
                     <div className="tag_line">
                        <i><CheckIcon/></i> Contactless Sharing
                     </div>
                     <div className="tag_line">
                        <i><CheckIcon/></i> Real-time Updates
                     </div>
                     <div className="tag_line">
                        <i><CheckIcon/></i> NFC-Enabled
                     </div>
                     <div className="tag_line">
                        <i><CheckIcon/></i> QR Code
                     </div>
                  </div>
                 </div>
             </div>
        </Container>
     </div>
    </> 
  )
}
export default Introduce