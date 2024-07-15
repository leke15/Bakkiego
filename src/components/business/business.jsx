import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Drive from "../drive/Drive"
import Earnings from "../earnings/Earnings"
import Verification from "../verification/Verification"
import Logo from "../../assets/logo.jpg";
import aiImage from "../../assets/AiImage.jpg"
import './business.css'


const business = () => {
  return (
    <section>
      <div className='header'>
      <img src={Logo} alt="Bakkiego" className="logo_img" />
      </div>

      <nav className='navbar'>
      <div className="navbar-links-01">
        <Link smooth to="#/verification" >Requirements</Link>
        <Link smooth to="#earn" >Earning</Link>
        <Link smooth to="/#drive" >Partner</Link>
        <Link smooth to="/#about" >about</Link>
      </div>
      </nav>

      <div>
        <img src={aiImage} alt="join bakkiego" className=""  />
      </div>

      <div>
        <h3>Opportunities Everywhere</h3>
        <h5>Make the most of your time on the road with a platform of customers looking for your services.</h5>
      </div>

      <div className="cta-01">
            <a href="#verification" download className="btn">
              sign up to drive
            </a>
      </div>
    </section>
  )
}

export default business