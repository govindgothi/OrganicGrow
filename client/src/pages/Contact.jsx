import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add form submission logic here (e.g., API call)
  };

  return (<>
  <Header></Header>
  <div className='Seller-Details'>
    <h2 className='Contact-head'>Contact Us</h2>
     <h3 className='head3'>Email Support Id : vaaradhifarms@gmail.com</h3>
     <h3 className='head3'>Customer Care Number :</h3>
     <h3 className='head3'>+91 89770 21193 / +91 89770 21197</h3>
     <h3 className='head3'>Customer Care Timings : 10:30am to 6:30pm</h3>
     <h3 className='head3'>Address - Mainkonda Hyderabad, Telangana , Pin - 500089</h3>
  </div>
  <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="label-text">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="input-field"
        />
        
        <label className="label-text">Contact Number</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your contact number"
          required
          className="input-field"
        />

        <label className="label-text">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          className="textarea-input"
        ></textarea>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    <Footer></Footer>
    </>);
}

export default Contact;
