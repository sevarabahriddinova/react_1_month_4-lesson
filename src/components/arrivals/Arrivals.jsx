import React, { useEffect, useState } from 'react'
import "./Arrivals.css"
import yulduz from "../../assets/yulduzcha.svg"
import strelka from "../../assets/strelkas.svg"
import strelka2 from "../../assets/strelka2.svg"
import yulduzlar from "../../assets/yulduzlar.svg"
import cosuel from "../../assets/cosuel.png"
import formal from "../../assets/formal.png"
import party from "../../assets/party.png"
import gym from "../../assets/gym.png"
import sms from "../../assets/sms.svg"


const Arrivals = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/products")
    .then (response => response.json())
    .then(data =>setProducts(data.products))
    
   },[])
   console.log(products)
  return (
   
    <div className='arrivals'>
        <div className='container'>
           <div className="arrivals__wrapper">
              <div className='arrivals__title'>
                <h2 className='arrivals__title__style'>NEW ARRIVALS</h2>
              </div>
           </div>


    <div className='products'>
      {
        products.map((product)=>(
         <div className='product__wrapper'>
           <div key={product.id}>
            <img className='product__img' src={product.thumbnail}alt=""/>
            <h3 className='title'>{product.title.slice(0,20)}</h3>
            <div><img src={yulduz} alt="" /></div>
             <span className='span'>{product.price}</span>
          </div>
         </div>
        )).slice(0,4)
      }
    </div>
 
 <div className='arrivals__wrapper'> 
              <div className='arrivals__title'>
                <h2 className='arrivals__title__style'>Top selling</h2>
              </div>
 </div>
 <div className='products'>
      {
        products.map((product)=>(
         <div className='product__wrapper'>
           <div key={product.id}>
            <img className='product__img' src={product.thumbnail}alt=""/>
            <h3 className='title'>{product.title}</h3>
            <div><img src={yulduz} alt="" /></div>
             <span className='span'>{product.price}</span>
          </div>
         </div>
        )).slice(4,8)
      }
    </div>


    <div className='browse__wrapper'>
      <div className='arrivals__wrapper'>
        <h2 className='arrivals__title__style'>BROWSE BY dress STYLE</h2>
      </div>

      <div className='browse__img_wrapper'>
        <img className='img__small' src={cosuel} alt="" />  
        <img className='img__big' src={formal} alt="" />  
        <img className='img__big' src={party} alt="" />  
        <img className='img__small' src={gym} alt="" />  
      </div>
    </div>



      <div className='customers'>
        <div className='customers__title'>
          <h2 className='arrivals__title__style'>OUR HAPPY CUSTOMERS</h2>
          <div className='customers__img'>
            <img className='strelka__left' src={strelka} alt="" />
            <img className='strelka__right' src={strelka2} alt="" />
          </div>
        </div>

        <div className='products'>
      {
        products.map((product)=>(
         <div className='product__wrappers'>
           <div key={product.id}>
           <div className='product__style'>
           <div className='customers__card'>
          <img className='product__imgs' src={yulduzlar} alt="" />
        </div>

             <h3 className='sub__title'>{product.title}</h3>
             <p className='description'>{product.description}</p>
           </div>
            </div>
         </div>
        )).slice(4,8)
      }
    </div>


<div className='offers'>
  <h2 className='offers__title'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>

  <div className='inputs'>
    <div className='input__wrapper'>
      <img src={sms} alt="" />
      <input className='inputs__style' type="text" placeholder='Enter your email address' />
    </div>
      <div className='secondry__input'>
        <input className='secon__inp__style' type="text" placeholder='Subscribe to Newsletter' />
      </div>
  </div>
</div>
      </div>
        </div>
    </div>

  )
}

export default Arrivals