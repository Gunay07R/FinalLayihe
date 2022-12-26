import React from 'react'


import twitter from '../svgs/social-meida-logos/twitter.svg'
import instagram from '../svgs/social-meida-logos/instagram.svg'
import facebook from '../svgs/social-meida-logos/facebook.svg'
const Links = () => {
  return (
    <>
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

export default Links