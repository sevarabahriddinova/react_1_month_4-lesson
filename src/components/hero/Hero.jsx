import React from 'react'
import logo from "../../assets/logo.svg"
import search from "../../assets/poisk.svg"
import corzinka from "../../assets/corzinka.svg"
import  icons from "../../assets/icons.svg"
import  strelka from "../../assets/strelka.svg"
 import "./Hero.css"
 
const Hero = () => { 
  return (
    <div className='hero'>
        <div className='container'>
            <div className='nav'>
                <div className='nav__title'>
                    <div className='nav__logo'>
                        <img src={logo} alt="" />
                    </div>
                        <ul className='nav__list'>
                            <li className='list__title'><a className='list__style' href="#">Shop</a> <img className='list__img' src={strelka} alt="" /></li>
                            <li className='list__title'><a className='list__style' href="#">On Sale</a></li>
                            <li className='list__title'><a className='list__style' href="#">New Arrivals</a></li>
                            <li className='list__title'><a className='list__style' href="http://localhost:5173/about">about</a></li>
                        </ul>
                        <div className='poisk__wrapper'>
                            <img src={search} alt=""/>
                            <input className='input' type="text" placeholder='Search for products...' />
                        </div>
                        <div className='nav__icons'>
                            <img src={corzinka} alt="" />
                            <img src={icons} alt="" />
                         </div>
                </div>
            </div>
         </div>
    </div>



    )
}

export default Hero