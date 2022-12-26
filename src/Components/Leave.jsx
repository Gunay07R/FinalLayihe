import React from 'react'
import leaves from '../svgs/images/leave.svg'
export const Leave = () => {
  return (
    <>
    <section className="image-leaves" data-aos="fade-up">
            <img src={leaves} alt="" />
            <div className="img-text-leaves">
                <div className="i">
                    <h2 id="head-leaves">Monstera Leafs</h2>
                </div>
                <p id="pg-leaves">Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus
                    orci tincidunt.</p>
            </div>
        </section>
    </>
  )
}
