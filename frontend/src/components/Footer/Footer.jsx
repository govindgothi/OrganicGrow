import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgb(21, 24, 25)',
      color: 'rgb(245, 245, 245)',
      padding: '40px 0',
      marginTop: '40px',
      textAlign: 'center'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Company Info */}
        <div style={{ flex: '1 1 200px', padding: '10px' }}>
          <h3 style={{ color: 'rgb(0, 123, 92)' }}>About Us</h3>
          <p style={{ fontSize: '14px' }}>We are committed to providing high-quality products and excellent customer service. Visit us to discover the best deals!</p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 200px', padding: '10px' }}>
          <h3 style={{ color: 'rgb(0, 123, 92)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/" style={{ color: 'rgb(245, 245, 245)', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/shop" style={{ color: 'rgb(245, 245, 245)', textDecoration: 'none' }}>Shop</a></li>
            <li><a href="/contact" style={{ color: 'rgb(245, 245, 245)', textDecoration: 'none' }}>Contact</a></li>
            <li><a href="/about" style={{ color: 'rgb(245, 245, 245)', textDecoration: 'none' }}>About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 200px', padding: '10px' }}>
          <h3 style={{ color: 'rgb(0, 123, 92)' }}>Contact Us</h3>
          <p style={{ fontSize: '14px' }}>123 E-commerce St, Suite 100<br />City, State, 12345</p>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div style={{ flex: '1 1 200px', padding: '10px' }}>
          <h3 style={{ color: 'rgb(0, 123, 92)' }}>Follow Us</h3>
          <a href="https://facebook.com" style={{ color: 'rgb(245, 245, 245)', textDecoration: 'none', margin: '0 10px' }}>Facebook</a>
          <a href="https://twitter.com" style={{ color: 'rgb(245, 245, 245)', textDecoration: 'none', margin: '0 10px' }}>Twitter</a>
          <a href="https://instagram.com" style={{ color: 'rgb(245, 245, 245)', textDecoration: 'none', margin: '0 10px' }}>Instagram</a>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <p style={{ marginTop: '20px', fontSize: '14px', color: 'rgb(180, 180, 180)' }}>© 2024 E-commerce Platform. All Rights Reserved.</p>
    </footer>
  );
}

export { Footer};
