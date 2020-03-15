import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md/index';
import DelayLink from 'react-delay-link';
import gsap from 'gsap';

const dismountAB = () => {
	gsap.to('.about', 2, {
		y: 30,
		opacity: 0,
		ease: 'Expo.easeInOut'
	});
};
export const About = () => {
	useEffect(() => {
		gsap.from('.about h2 span', 1, {
			top: '200px',
			ease: 'Expo.easeInOut',
			stagger: {
				amount: 0.4
			}
		});

		gsap.from('.about p span', 1.4, {
			delay: 1,
			right: '1500px',
			ease: 'Expo.easeInOut',
			stagger: {
				amount: 0.8
			}
		});
		gsap.from('.down-sc ', 1.2, {
			delay: 2,
			opacity: 0,
			ease: 'Expo.easeOut'
		});
	}, []);
	return (
		<div className="about">
			<h2>
				<span>K</span>
				<span>A</span>
				<span>B</span>
				<span>A</span>
				<span>R</span>
				<span>E</span>
				<span>E</span>
				<span>T</span>
			</h2>
			<p>
				<span>
					A creative space for independent art, music festival and culture.
				</span>
				<br />
				<span>
					Event, performance venue and alternative pub located in Haifa
					downtown.
				</span>
				<br />{' '}
				<span>
					Kabareet hosts local and international music concerts, as well as
					promoting underground DJs and alternative music.
				</span>
				<br />
				<span>
					Brought to safe to sustain culture freedom for artists in a
					post-gentrified environment.
				</span>
				<br />
				<span>
					We are always trying to create exchange between the city of Haifa and
					other culture hotspots all over the world.
				</span>
			</p>
			<div className="down-sc">
				<strong>Established in 2015 .</strong>
				<DelayLink delay={2000} to="/about/more" clickAction={dismountAB}>
					click here to read more
				</DelayLink>
			</div>
		</div>
	);
};

const dismountAM = () => {
	gsap.to('.about-more', 2, {
		top: '100%',
		ease: 'Expo.easeInOut'
	});
};

export const AboutMore = () => {
	useEffect(() => {
		gsap.from('.about-more', 2, {
			top: '100%',
			ease: 'Expo.easeInOut'
		});
		gsap.from('.am-title span', 1, {
			delay: 2,
			top: '200px',
			ease: 'Expo.easeInOut',
			stagger: {
				amount: 0.4
			}
		});

		gsap.from('.title-img', 1.6, {
			delay: 2.2,
			right: '-1200px',
			ease: 'power0.easeInOut'
		});

		gsap.from('.b-pic', 1.6, {
			delay: 3,
			top: '1200px',
			ease: 'power0.easeInOut'
		});
		gsap.from('.am-c-p', 1.5, {
			delay: 4,
			y: 200,
			opacity: 0,
			ease: 'power0.easeInOut'
		});
	}, []);
	return (
		<div className="about-more">
			<div className="am-header">
				<DelayLink delay={2000} to="/about" clickAction={dismountAM}>
					<MdChevronLeft size={45} style={{ margin: '20px' }} />
				</DelayLink>
			</div>
			<div className="am-content">
				<div className="am-title">
					<div className="title-name">
						<span>K</span>
						<span>A</span>
						<span>B</span>
						<span>A</span>
						<span>R</span>
						<span>E</span>
						<span>E</span>
						<span>T</span>
					</div>
					<div className="title-residence">
						<span>R</span>
						<span>E</span>
						<span>S</span>
						<span>I</span>
						<span>D</span>
						<span>E</span>
						<span>N</span>
						<span>C</span>
						<span>E</span>
					</div>
					<div className="title-img"></div>
				</div>
				<div className="am-body">
					<div className="b-pic am-c-p1"></div>
					<p className=" am-c-p">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut vel
						autem, cumque labore dolorem incidunt error dolore eos quia, veniam
						repellat tenetur inventore reprehenderit similique modi consectetur
						nam nulla quo?Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ut vel autem, cumque labore dolorem incidunt error dolore eos
						quia, veniam repellat tenetur inventore reprehenderit similique modi
						consectetur nam nulla quo?Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Ut vel autem, cumque labore dolorem incidunt error
						dolore eos quia, veniam repellat tenetur inventore reprehenderit
						similique modi consectetur nam nulla quo?Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Ut vel autem, cumque labore dolorem
						incidunt error dolore eos quia, veniam repellat tenetur inventore
						reprehenderit similique modi consectetur nam nulla quo?
					</p>
					<div className="b-pic am-c-p2"></div>
				</div>
			</div>
		</div>
	);
};
