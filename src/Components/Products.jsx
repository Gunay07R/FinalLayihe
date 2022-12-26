import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import apple from '../svgs/images/products/apple-products.svg'
import Drone from '../svgs/images/products/drone.svg'
import Wildlife from '../svgs/images/products/wildlife.svg'
import photography from '../svgs/images/products/photography.svg'
import { useEffect } from 'react'


const Products = () => {
    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
  return (
    <>
    <section className="image-section" id='products'>
            <div className="img-up">
                <div className="img-up-left" data-aos="fade-up">
                    <img src={apple} alt="" className='apple-img' />
                    <h2 id="img-up" className="img-head" data-aos="fade-up">Product Photography</h2>
                    <p id="img-up" className="img-pg" data-aos="fade-left">Cras commodo consequat orci, in convallis risus egestas non. Nulla
                        efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.
                    </p>
                    <div className="circle-photography-left"></div>
                    <button id="img-ups" className="check-btn first">Read more</button>

                </div>
                <div className="img-up-right">
                    <img src={photography} alt="" className='apple-img' data-aos="fade-up" />
                    <h2 id="img-up" className="img-head" data-aos="fade-up">Architecture Photography</h2>
                    <p id="img-up" className="img-ups" data-aos="fade-right">Aenean porta neque eget consequat fringilla. Vestibulum ultrices,
                        orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce
                        tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec
                    </p>
                    <div className="circle-photography-right"></div>
                    <button id="img-ups" className="check-btn">Read more</button>
                </div>
            </div>
            <div className="img-down">
                <div className="img-down-left" >
                    <img src={Drone} alt="" className='apple-img' data-aos="fade-up"/>
                    <h2 id="img-down" className="img-head" data-aos="fade-up">Drone Photography</h2>
                    <p id="img-down" className="img-pg" data-aos="fade-left">Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.
                        Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas
                        non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.
                    </p>
                    <div className="circle-drone-photography-left"></div>
                    <button id="img-ups" className="check-btn">Read more</button>
                </div>
                <div className="img-down-right">
                    <img src={Wildlife} alt="" className='apple-img' data-aos="fade-up"/>
                    <h2 id="img-down" className="img-head" data-aos="fade-up">Wildlife Photography</h2>
                    <p id="img-down" className="img-pg" data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque
                        ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.
                    </p>
                    <div className="circle-drone-photography-right"></div>
                    <button id="img-ups" className="check-btn">Read more</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products