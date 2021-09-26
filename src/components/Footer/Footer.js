import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Thank you for choosing us. Best wishes for your upcomming arrangment.</p>
            <p>-CEO, <span>Arrange A Concert</span></p>
            <h3>Follow Us</h3>
            <ul>
                <li><a href="/#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    );
};

export default Footer;