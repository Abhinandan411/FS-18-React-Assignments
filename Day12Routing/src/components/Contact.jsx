import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import MailIcon from '@mui/icons-material/Mail';
import Footer from './Footer';

function Contact() {
  return (
    <>
    <div className="contactContainer">
      <div className='leftContact'>
        <h1>GET IN TOUCH WITH US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
        <div className="contactInfo">
          <div className="contactItem">
            <HouseIcon className="contactIcon" />
            <div>
              <h3>Our Location</h3>
              <p>99 S.t Jomblo Park Pekanbaru 28292.Indonesia</p>
            </div>
          </div>
          <div className="contactItem">
            <PhoneForwardedIcon className="contactIcon" />
            <div>
              <h3>Phone Number</h3>
              <p>(+62)81 414 257 9980</p>
            </div>
          </div>
          <div className="contactItem">
            <MailIcon className="contactIcon" />
            <div>
              <h3>Email Address</h3>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='rightContact'>
        <h2>Contact Form</h2>
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Your Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Contact;
