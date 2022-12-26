import React from 'react'

import {BsFillTelephoneFill} from 'react-icons/bs'

import twitter from '../svgs/social-meida-logos/twitter.svg'
import instagram from '../svgs/social-meida-logos/instagram.svg'
import facebook from '../svgs/social-meida-logos/facebook.svg'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-left">
          <h1 id='contact'>Contact Us</h1>
          <h3 >Get in touch</h3>
          <span>Email:gunaynxtahirzade@gmail.com</span>
          <a id='call' href="tel:+994558562219"> <BsFillTelephoneFill/> Call us</a>
          <p id='contact-pg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus expedita ratione sed eum? Quo?</p>
        </div>
        <div className="contact-right">
          <div className="head-contact">
            <form action="">
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
            </form>
          </div>
          <div className="message-contact">
            <form action="">
              <input type="text" placeholder='Message' id='msg' />
            </form>
            <button id='send'>Send</button>
          </div>
        </div>
      </div>
      <div className="line-down"></div>
      <section class="footer-bottom">
            <div class="footer-bottom-left">
                <p id='last-p'> {'\u00a9'} Aperture Photography, Inc. All rights reserved. Licensing.</p>
            </div>
            <div class="footer-bottom-right">
                <a href="https://twitter.com/" id="social-media"><img src={twitter} alt="" /></a>
                <a href="https://www.instagram.com/" id="social-media"><img src={instagram} alt="" /></a>
                <a href="https://www.facebook.com/" id="social-media"><img src={facebook} alt="" /></a>
            </div>
        </section>
    </>
  )
}

export default Contact