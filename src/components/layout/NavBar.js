import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const NavBar = () => {
	useEffect(() => {
		gsap.from('.logo', 1, {
			//delay: 2.2,
			opacity: 0,
			y: 20,
			ease: 'Expo.easeInOut'
		});

		gsap.from('.nav-itm', 1.2, {
			//delay: 2.2,
			opacity: 0,
			y: 15,
			ease: 'Expo.easeInOut',
			stagger: {
				amount: 0.4
			}
		});
	}, []);
	return (
		<div className="navbar">
			<div className="logo round-obj"></div>
			<ul className="nav">
				<Link className="nav-itm" to="/">
					Home
				</Link>
				<Link className="nav-itm" to="/about">
					About
				</Link>
				<Link className="nav-itm" to="/communities">
					Communities
				</Link>
				<Link className="nav-itm" to="/events">
					Events
				</Link>
				<Link className="nav-itm" to="/contact">
					Contact
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;
