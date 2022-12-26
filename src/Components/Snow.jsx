import React from 'react'
import Starfall from '../svgs/images/starfall.svg'
const Snow = () => {
  return (
    <>
    <section className="image-star-fall" data-aos="fade-up">
            <img src={Starfall} alt="" className='img-star-fall' />
            <div className="img-star-fall">
                <div className="i">
                    <h2 id="head-star-fall">Star fall in the Himalayas</h2>
                </div>
                <p id="pg-star-fall">Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
            </div>
        </section>
    </>
  )
}

export default Snow