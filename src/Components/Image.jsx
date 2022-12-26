import React from 'react'

import mountain from '../svgs/images/mountain.svg'

const Image = () => {
  return (
    <>
    <section className="image"  data-aos="fade-up">
    <img src={mountain} alt="" className='f-image'/>
            <div className="text">
                <p id="PF">PHOTOGRAPHER & FILMMAKER</p>
                <h2 id="AS">Aperture Studios</h2>
                <small id="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                    vitae
                    erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                    tristique
                    posuere.</small>
            </div>
        </section>
    </>
  )
}

export default Image