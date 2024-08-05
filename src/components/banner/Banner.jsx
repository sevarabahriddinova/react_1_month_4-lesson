import React from 'react'
import "./Banner.css"
import versache from "../../assets/versache.svg"
import zara from "../../assets/zara.svg"
import gucci from "../../assets/gucci.svg"
import prada from "../../assets/prada.svg"
import klein from "../../assets/klein.svg"

import banner__img from "../../assets/Hero.png"

const Banner = () => {
  return (
      <div className='banner'>
         <div className='container'>
          <div className='banner__wraper'>
             <div className='hero__Img'>
                <img className='hero__img__style' src={banner__img} alt="" />
             </div>
            <div className='banner__title'>
              <div className='banner__subtitle'>
                <h2 className='title__style'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                <p className='banner__text'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className='btn'>Shop Now</button>
              </div>
              <div className='banner__degree'>
                <div className='degree'>
                    <span className='degree__number'>200+</span>
                    <p className='degree__string'>International Brands</p>
                </div>
                <div className='degree'>
                    <span className='degree__number'>2,000+</span>
                    <p className='degree__string'>International Brands</p>
                </div>
                <div className='degree'>
                    <span className='degree__number'>30,000+</span>
                    <p className='degree__string'>International Brands</p>
                </div>
              </div>
            </div>
          </div>
         </div>
         <div className='content'>
          <div className='container'>
            <div className='content__wrapper'>
                <img src={versache} alt="" />
                <img src={zara} alt="" />
                <img src={gucci} alt="" />
                <img src={prada} alt="" />
                <img src={klein} alt="" />
              </div>            
          </div>
         </div>
      </div>

      

    )
}

export default Banner