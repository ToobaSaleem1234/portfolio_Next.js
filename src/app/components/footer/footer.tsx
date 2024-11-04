import React from 'react'
import "./footer.css"
import Image from 'next/image'
import { ImFacebook2 } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { BiSolidCopyright } from "react-icons/bi";


const Footer = () => {
  return (
    <div id='footer'>
      <div id='one'>
        <div id="flex">
        <Image src='/logo.jpg' width={60} height={60} alt='logo'></Image>
        <h1 className='TS'>TS INSTITUTE</h1>
        </div>
        <h4 id='first'>Send your feedback here:</h4>
        <input id='foot' type="text" placeholder='Enter your valuable feedback' />
      </div>
      <div id="two">
        <h1 className='support'>Support</h1>
        <ul>
          <li>TSinstitute@gmail.com</li>
          <li>0305-1234567</li>
        </ul>
      </div>
      <div id="three">
        <h1 className='support'>Account</h1>
        <ul>
          <li>My account</li>
          <li>Login</li>
          <li>Contact</li>
        </ul>
      </div>
      <div id="four">
        <h1 className="support">Quick Links</h1>
        <h4 id="link">You can reach me on:</h4>
        <div id='icons'>
          <ImFacebook2 size={30} />
          <ImGithub size={30} />
          <ImLinkedin size={30} />
          <ImInstagram size={30} />
          <ImYoutube size={30} />
        </div>
        <div id='copyright'>
          <BiSolidCopyright size={30} />
          <p>
            Copyright Reserved @ 2024
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer