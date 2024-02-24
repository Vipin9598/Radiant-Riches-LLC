import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-main-div'>
        <div className='footer-design'>
          <p className='footer-title'>Categories</p>
          <p className='footer-content'>Web Builder</p>
          <p className='footer-content'>Hosting</p>
          <p className='footer-content'>Data Center</p>
          <p className='footer-content'>Robotic-Automation</p>
        </div>

        <div className='footer-design'>
          <p className='footer-title'>Contact</p>
          <p className='footer-content'>Privacy Policy</p>
          <p className='footer-content'>Terms Of Service</p>
          <p className='footer-content'>Categories</p>
          <p className='footer-content'>About</p>
        </div>

        <div className='footer-design'>
          <div className='footer-country'>
            <p className='footer-content'>United States</p>
            <RiArrowDropDownLine className='footer-content drop-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
