import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Redirect to the confirmation page after submission
    navigate('/confirmation');
  };

  return (
    <div style={{ backgroundColor: '#a1bbb0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px 40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '90%'
      }}>
        <h2 style={{ color: '#444', textAlign: 'center' }}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label htmlFor="name" style={{ color: '#333', fontWeight: 'bold' }}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
          />

          <label htmlFor="email" style={{ color: '#333', fontWeight: 'bold' }}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
          />

          <label htmlFor="message" style={{ color: '#333', fontWeight: 'bold' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px', resize: 'vertical', minHeight: '100px' }}
          ></textarea>

          <button type="submit" style={{
            backgroundColor: 'rgb(0, 123, 92)',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
