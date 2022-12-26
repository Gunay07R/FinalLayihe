import React from 'react'
import aperture from '../svgs/aperture.svg'
const Footer = () => {
  return (
    <>
    <section class="footer" data-aos="fade-up">
            <div class="footer-left">
                <img src={aperture} alt="" id='footer-img'/>
                <p id="footer-pg">Photographers & videographers capturing the world around us.</p>
            </div>
            <div class="footer-right">
                <div class="info-left">
                    <h3 id="info-text">Business areas</h3>
                    <a href="" id="info-link">Product Photography</a>
                    <a href="" id="info-link">Architecture Photography</a>
                    <a href="" id="info-link">Drone Photography</a>
                    <a href="" id="info-link">Wildlife Photography</a>
                </div>
                <div class="info-right">
                    <h3 id="info-text">Pages</h3>
                    <a href="" id="info-link">Gear cage</a>
                    <a href="" id="info-link">Featured images</a>
                    <a href="" id="info-link">Contact</a>
                    <a href="" id="info-link">Style guide</a>
                    <a href="" id="info-link">Instructions</a>
                    <a href="" id="info-link">Changelog</a>
                </div>
            </div>
        </section>
        <div class="line-up"></div>
    </>
  )
}

export default Footer