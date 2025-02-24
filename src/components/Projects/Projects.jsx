import React from 'react'
import './Projects.css'
import theme_img from '../../assets/icons.svg'
import certification_data from '../../assets/certificate_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Projects = () => {
  return (
    <div id='certifications' className='projects'>
        <div className='projects-title'>
        <h1>My Certifications</h1>
      <img src={theme_img} alt=''/>
    </div>
    <div className='certifications-container'>
        {certification_data.map((certificate,index)=>{
          return <div key ={index} className='certifications-format'>
            <h3>{certificate.s_no}</h3>
            <h2>{certificate.s_name}</h2>
            <p>{certificate.s_desc}</p>
            <div className='certifications-readmore'>
              <p><a className="certificate" href={certificate.link} target="_blank" rel="noopener noreferrer">View Certificate...<img src={arrow_icon} alt=''/></a></p>
            </div>
          </div>
        })}
    </div>
    <div className="myprojects-showmore">
                <p><a className="myshow" href="https://drive.google.com/drive/folders/1oW0PuaketGYkAC45Z274KaoP4MLbhoAP" target="_blank" rel="noopener noreferrer">Show More...</a></p>
                <img src={arrow_icon} alt=''/>
              </div>
    </div>
  )
}

export default Projects
