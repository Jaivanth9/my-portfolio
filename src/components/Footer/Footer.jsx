import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';  // Importing specific icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/jaivanth-koppula/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Jaivanth9/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaGithub size={30} />
        </a>
        <a href="https://www.facebook.com/jaivanth.koppula" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/jaivanth_4_7/?hl=en" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram size={30} />
        </a>
      </div>
      <p style={styles.text}>© 2025 Jaivanth Koppula. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',  // This allows the icons to wrap on smaller screens
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
  },
  text: {
    marginTop: '15px',
    fontSize: '14px',
  },
  // Adding responsive styles using media queries
  '@media (max-width: 768px)': {
    footer: {
      padding: '15px',
    },
    socialLinks: {
      gap: '10px',
    },
    text: {
      fontSize: '12px',
    },
  },
  '@media (max-width: 480px)': {
    socialLinks: {
      gap: '8px',
      flexDirection: 'column',  // Stack icons vertically on very small screens
    },
    text: {
      fontSize: '10px',
    },
  },
};

export default Footer;
