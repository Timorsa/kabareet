import React, { useEffect, Fragment } from 'react';
import gsap from 'gsap';

export const OverLay = () => {
	useEffect(() => {
		gsap.to('.overlay', 2, {
			delay: 1,
			top: '-100%',
			ease: 'Expo.easeInOut'
		});
	}, []);
	return (
		<div className="overlay">
			<div className="overlay-logo"></div>
		</div>
	);
};

// export const VideoBg = () => {
// 	return (
// 		<video autoplay loop id="myVideo">
// 			<source src={'../assets/kb-bg-bw.mp4'} type="video/mp4" />
// 		</video>
// 	);
// };
