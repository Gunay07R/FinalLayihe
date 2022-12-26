import React, {useRef} from 'react'
import logo from '../svgs/aperture.svg'
import {AiOutlineClose} from 'react-icons/ai'
import {Link as Scroll} from 'react-scroll'


import { Navigate, Link } from 'react-router-dom'

import BackToTopButton from './BackToTopButton.js'
import { useEffect } from 'react'


const Navbar = () => {
   const overlayRef = useRef()
   const buttonRef = useRef()
   const closeOverlayMenuRef = useRef()
   const closeOverlayMenu = (e)=>{
    const clickedElement = e.target
    if(clickedElement.classList.contains('close')){
      overlayRef.current.classList.remove('active')
    }
   }
   const openOverLayMenu = (e) =>{
      const clickedElement = e.target

      if(clickedElement.classList.contains('view')){
         overlayRef.current.classList.add('active')
      }
   }




   const [goToContact, setGoToContact] = React.useState(false);

    if (goToContact) {
      return <Navigate to="/contact" />;
    }


  return (
   <>
   <div className="overlay" ref={overlayRef}>
      <AiOutlineClose className='close' ref={closeOverlayMenuRef} onClick={closeOverlayMenu}/>

      <div className="overlay-links">
         <a className="nav-link" id='log'href="#">Sign up</a>
         <a className="nav-link" id='log'href="#">Business areas</a>
         <a className="nav-link" id='log'href="#">Gear cage</a>
         <Link className="nav-link" to="/contact" id='log'href="#">Contact</Link>
   </div>

   </div>

  





   <nav className="navbar navbar-expand-lg bg-dark p-3">
   <div className="container-fluid">
     <Link to='/' className="navbar-brand logo" href="#"><img src={logo} alt="" /></Link>
     
     <button className="navbar-toggler bars"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon "></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav ms-auto">
        <Scroll spy={true} smooth={true} offset={10} duration={500}><Link to="/"   className="nav-link active" id='logo'  aria-current="page" href="#">Home</Link></Scroll>
        <Scroll spy={true} smooth={true} offset={10} duration={500} className="nav-link"  to='products' id='logo'>Featured images </Scroll>
         <Scroll  to="brands" spy={true} smooth={true} offset={-150} duration={100} className="nav-link" id='logo'>Business areas</Scroll>
         <Link to="tools" spy={true} smooth={true} offset={-100} duration={100} className="nav-link" id='logo'href="#">Gear cage</Link>
         <Link  to="/contact" className="nav-link" id='logo'>Contact</Link>
         <Link onClick={openOverLayMenu} className="view" ref={buttonRef}>Tap to view</Link>
         <button id="temp">Get template</button>
       </div>
       
     </div>
   </div>
   <BackToTopButton/>
 </nav>
 </>
  )
}

export default Navbar