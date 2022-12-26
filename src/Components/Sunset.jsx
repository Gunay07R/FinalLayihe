import React from 'react'
import sunset from '../svgs/images/sunset.svg'
const Sunset = () => {
  return (
    <>
    <section class="image-mountain" data-aos="fade-up">
            <img src={sunset} alt="" className='img-mountain' />
            <div class="img-text-mountain">
                <div class="i">
                    <h2 id="head-mountain">Sunset at Mount Fuji</h2>
                </div>
                <p id="pg-mountain">Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis
                    risus egestas non.</p>
            </div>
        </section>
    </>
  )
}

export default Sunset