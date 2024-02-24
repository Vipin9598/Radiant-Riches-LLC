import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContent' >
        <div >
            <input/>
            <IoSearchOutline className='searchIcon'/>
        </div>
        <p>Categories</p>
        <p>Website Builders</p>
        <p>Today's deals</p>
      </div>
    </div>
  )
}

export default Navbar
