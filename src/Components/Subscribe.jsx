import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const Subscribe = () => {
  return (
    <>
    <section className="subscribe" data-aos="fade-up">
            <div className="subscribe-left">
                <h3 id="subscribe-head">Subscribe to our newsletter</h3>
                <p id="subscribe-pg">Read about all the things we do.</p>
            </div>
            <div className="subscribe-right">
                <form id="searchh" action="">
                    <input type="search" id='search-input' required/>
                    <AiOutlineSearch className='fa'/>
                </form>
            </div>
        </section>
        <div className="line-down"></div>
    </>
  )
}

export default Subscribe