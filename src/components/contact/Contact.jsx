import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/icons.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5ae67ebf-d86b-41c8-86ed-979e36cac0db");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };




  return (
    <div id ='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
<img src={theme_pattern} alt='' />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I am currently pursuing my 3rd year B.Tech in Computer Science and Engineering (CSE) at LPU. Feel free to reach out for collaboration or any inquiries.</p>
            <div className='contact-details'>
                <div className="contact-detail">
                    <img src={mail_icon} alt=''/><p>jaivanthkoppula999@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={call_icon} alt=''/><p>+91 9948469694</p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt=''/><p>Tadepalligudem, Andhrapradesh, 534101</p>
                </div>
            </div>
        </div>
        <div>
            <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='4' placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
