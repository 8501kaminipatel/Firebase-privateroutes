import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>All Products</li>
            <li>Categories</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Dashboard</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Info</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <img src="https://happenstance.com/themes/happenstance/images/facebook.webp" alt="Facebook" />
            <img src="https://happenstance.com/themes/happenstance/images/instagram.webp" alt="Instagram" />
            <img src="https://happenstance.com/themes/happenstance/images/twitter.webp" alt="Twitter" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Firebase ProductApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
