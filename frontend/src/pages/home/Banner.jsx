import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/header.png"
const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__contet z-30'>
          <h4 className='uppercaes'>UP TO 20% Discount on</h4>
          <h1>Man's Fashion</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum nobis velit officia suscipit animi iusto, quibusdam deserunt pariatur. </p>
          <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
        </div>
        <div className='header__image'>
          <img src={bannerImg} alt="banner img"/>
        </div>
    </div>
  )
}

export default Banner
