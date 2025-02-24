import React from 'react'
import './About.css'
import theme_pattern from '../../assets/icons.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
      <h1>About Me</h1>
      <img src={theme_pattern} alt='' />
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src ={profile_img} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I have strong focus on web development and software engineering</p>
                <p>I have experience in languages like C/C++, JavaScript, PHP, and HTML/CSS. I’ve worked with web development tools and frameworks like ReactJS, NodeJs, and AngularJS, along with databases like MySQL and MongoDB </p>
                <p>Outside of academics, I enjoy gardening, cooking, and listening to music, and I'm proficient in English, Hindi, and Telugu.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"75%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Mongo DB</p><hr style={{width:"80%"}}/></div>

            </div>
        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>20+</h1>
            <p>CERTIFICATIONS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2</h1>
            <p>INTERNSHIPS</p>   
        </div>
        <hr />
    </div>
    </div>

  )
}

export default About
