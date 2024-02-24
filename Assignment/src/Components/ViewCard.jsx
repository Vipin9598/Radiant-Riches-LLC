import React from 'react'
import Image from "../assets/Item.png"

const ViewCard = () => {
  return (
    <div className='viewCard'>
      <div className='img-Container'>
        <img  width="141px" height="103px" src={Image}/>
      </div>

      <div className='price-container'>
        <p className='priceItem'>20% off</p>
        <p className='priceItem'>Limited Time</p>
      </div>

      <div>
        <p className='ItemType'>Webbuilder 1</p>
      </div>

      <div className='ItemDesc'>
        <p>Computer  Modern clasic with wix support</p>
      </div>

      <div className='price-box '>
        <span>$39.96</span> <span className='priceHighlight'>{"$49.96"}</span> <span className='highlightText'>{" (20% Off) "}</span>
      </div>

      <button className='viewButton'>
        View Deal
      </button>
    </div>
  )
}

export default ViewCard
