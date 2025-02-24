import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Jaivanth Koppula,</span> Fullstack Web Development Student</h1>
      <p>I'm a Fullstack Web Developer student from Lovely Professional University, Enthusiast in creating web applications.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className='hero-resume'><a className="myresume" href="https://drive.google.com/file/d/143YvJYdbiegNdJSk73q5ddBlL0am3agW/view?usp=drive_link" target="_blank" rel="noopener noreferrer">My Resume</a></div>

      </div>
    </div>
  )
}

export default Hero
