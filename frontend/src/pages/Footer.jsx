import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../App.css";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='connectly'>
            <h2 style={{color:"#1E90FF"}}>CONNECTLY</h2>
            <br></br>
            <p style={{color:"#d5d7d8ef"}}>Where Real Connections Meet</p> <p style={{color:"#d5d7d8ef"}}>the Digital World.</p>
        </div>
        <div className='getintouch'>
            <p style={{fontWeight:"bold"}}>GET IN TOUCH</p>
            <br></br>
            <div>
                <EmailIcon sx={{ color:"#45B1E8" }}/>
                &nbsp;
                <p>connectly@gmail.com</p>
            </div>
            <div>
                <EmailIcon sx={{ color:"#45B1E8" }}/>
                &nbsp;
                <p>instantconnectly@gmail.com</p>
            </div>
            <div>
                <EngineeringIcon sx={{ color:"#45B1E8" }}/>
                &nbsp;
                <p>Support Team : 10am-6pm</p>
            </div>
        </div>
        <div className="connect">
            <p style={{fontWeight:"bold"}}>CONNECT WITH US</p>
            <br></br>
            <div>
                <a href="https://www.instagram.com/d_himanshu_here/">Instagram</a>
                &nbsp;
                <InstagramIcon sx={{ color:"#45B1E8" }}/>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/-himanshu01/">Linkedin</a>
                &nbsp;
                <LinkedInIcon sx={{ color:"#45B1E8" }}/>
            </div>
            <div>
                <a href="https://x.com/HimAnshuPa52568?t=yREeYfqcNW_Ux6HREcve7A&s=09">Twitter</a>
                &nbsp;
                <XIcon sx={{ color:"#45B1E8" }}/>
            </div>
        </div>
    </div>
  )
}
