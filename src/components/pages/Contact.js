import React from 'react';

const Contact = () => {
	return (
		<div className="contact-us">
			<div className="left-side">
				<form className="contact-form">
					<h2>Contactn Us</h2>
					<input type="text" placeholder="Name*" />
					<input type="email" placeholder="Email*" />
					<input type="text" placeholder="Phone" />
					<input type="text" placeholder="Subject" />
					<textarea name="message" type="text" placeholder="Message" />
					<button type="submit" value="Submit">
						Submit
					</button>
				</form>
			</div>
			<div className="right-side">
				<div className="map"></div>
			</div>
		</div>
	);
};

export default Contact;
