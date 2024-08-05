import React from 'react'
import sms2 from "../assets/sms2.svg"
import telefon from "../assets/telefon.svg"
import lokatsiya from "../assets/lokatsiya.svg"
import havolalar from "../assets/havolalar.svg"
import "../routes/About.css"
const About = () => {
  return (
     <div className='about'>
      <div className='about__left'>

          <h2 className='about__title'>Les’t talk on something great together</h2>
        
        <div className='information'>
          <div className='content__about'>
            <img className='content__img' src={sms2} alt="" />
            <a href="email:">andreaDesign@gmail.com</a>
          </div>
          <div className='content__about'>
            <img src={telefon} alt="" />
            <a href="tel:">+34 123 456 789</a>
          </div>
          <div className='content__about'>
            <img src={lokatsiya} alt="" />
            <a href="tel:">123 Street 487 House</a>
          </div>
        </div>

            <div>
              <img src={havolalar} alt="" />
            </div>
      </div>
      
      <div className='about__right'>
        <div className='right__title'>
        <h2 className='content__right__title'>I’m interested in:</h2>
        <div className='btn__wrappers'>
          <button className='button'>UX/ UI design</button>
          <button className='button'>Web design</button>
          <button className='button'>Design system</button>
          <button className='button'>Graphic design</button>
          <button className='button2'>Other</button>
        </div>
        </div>
                <div className='name'>
                  <h3 className='name__title'>Your name</h3>
                  <p className='name__text'>Jhon Smith</p>
                  <hr className='chiziq' />
                </div>

                    <div className='email'>
                      <h3 className='email__title'>Your email</h3>
                      <p className='name__text'>email@gmail.com</p>
                      <hr className='chiziq2' />
                    </div>

                          <div className='message'>
                          <h3 className='email__title'>Your message</h3>
                          <div className='empty'></div>
                          </div>

                              <button className='name__btn'>Send message</button>
      </div>
     </div>
  )
}

export default About