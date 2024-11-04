import React from 'react'
import "./contact.css"
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImYoutube } from "react-icons/im";

const Contact = () => {
  return (
    <div id='contact'>
      <h1 className='mycontact'>Contact Me</h1>
      <div id='mycss'>
        <div id="leftside">
          <h1>Getting in Touch with Ease!</h1>
          <div className="ic">
            <FaRegAddressCard size={30} />
            <p>Sunny Side Builiding A.M.3 Burns Road,Karachi </p>
          </div>
          <div className="ic">
            <FaPhoneAlt size={30} />
            <p>0305-1234567</p>
          </div>
          <div className="ic">
            <FaMailBulk size={30} />
            <p>saleemtooba999@gmail.com</p>
          </div>
          <div id='ons'>
          <ImFacebook2 size={30} />
          <ImGithub size={30} />
          <ImLinkedin size={30} />
          <ImInstagram size={30} />
          <ImYoutube size={30} />
        </div>

        </div>
        <div id='rightside'>
          <input type="text" placeholder='Enter your name' />
          <input type="text" placeholder='Enter your email' />
          <input className='msg' type="text" placeholder='Enter your message' />
          <button id="message">Message Sent</button>
        </div>
      </div>
    </div>
  )
}

export default Contact