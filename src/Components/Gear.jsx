import React from 'react'
import tool from '../svgs/images/tools.svg'
const Gear = () => {
  return (
    <>
    <section class="tools" data-aos="fade-up">
            <div class="tool-left">
                <h3 id="tool-head">The Gear cage</h3>
                <h2 id="tool-title">The tools that we use.</h2>
                <p id="tool-pg">The say that "no place is boring if you've had a good night's sleep and have a pocket
                    full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that
                    we actually use everyday to capture the amazing things around us.</p>
                <div class="circle-check"></div>
                <button class="check-btnn">Check it out</button>
            </div>
            <div class="tool-right">
                <img src={tool} alt="" id='tool-img' />
            </div>
        </section>
    </>
  )
}

export default Gear