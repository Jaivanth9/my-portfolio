import React from 'react'
import './Myprojects.css'
import mywork_data from '../../assets/myproject_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import theme_pattern from '../../assets/icons.svg'
const Myprojects = () => {
  return (
    <div id='projects' className='myprojects'>
        <div className="myprojects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="myprojects-container">
  {mywork_data.map((work, index) => {
    return (
      <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
        <img src={work.w_img} alt={work.w_name} />
      </a>
    );
  })}
</div>
<div className="myprojects-myshow">
                <p><a className="mysshow-myshow" href="https://github.com/Jaivanth9/" target="_blank" rel="noopener noreferrer">Show More...</a></p>
                <img src={arrow_icon} alt=''/>
              </div>
    </div>
  )
}

export default Myprojects
 