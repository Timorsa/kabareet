import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-form">
        <div className="header">Contact Us</div>
        <input
          type="text"
          name="name"
          className="contact-input"
          placeholder="Name"
        />
        <input
          type="text"
          name="name"
          className="contact-input"
          placeholder="Email"
        />
        <input
          type="text"
          name="name"
          className="contact-input"
          placeholder="Phone"
        />
        <input
          type="tex-area"
          name="message"
          className="contact-input"
          placeholder="Message"
        />
        <button className="contact-submit" type="submit">
          SEND
        </button>
        <div className="mailto">Or mail us at : Kabareet@gmail.com</div>
      </div>
      <div className="contact-left">
        <div className="social"></div>
      </div>
    </div>
  );
};

export default ContactUs;
