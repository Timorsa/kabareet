import React, { useEffect } from 'react';
import gsap from 'gsap';

const Communities = () => {
	useEffect(() => {
		gsap.from('.cmn', 2.5, {
			x: -1600,
			opacity: 0,
			ease: 'Expo.easeInOut',
			stagger: {
				amount: 0.3
			}
		});
	}, []);

	const communities = [
		{
			name: 'El-Jam',
			picURL:
				'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.0-8/p960x960/26232267_1587220714690285_7247624497080500269_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=8sHVBZzgMGIAX-7fcCA&_nc_ht=scontent.ftlv5-1.fna&_nc_tp=6&oh=93a44395590902d1e6734d66cc8bd8a0&oe=5E955331'
		},
		{
			name: 'Kubaneye',
			picURL:
				'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.0-8/p960x960/26232267_1587220714690285_7247624497080500269_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=8sHVBZzgMGIAX-7fcCA&_nc_ht=scontent.ftlv5-1.fna&_nc_tp=6&oh=93a44395590902d1e6734d66cc8bd8a0&oe=5E955331'
		},
		{
			name: 'Clout',
			picURL:
				'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.0-8/p960x960/26232267_1587220714690285_7247624497080500269_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=8sHVBZzgMGIAX-7fcCA&_nc_ht=scontent.ftlv5-1.fna&_nc_tp=6&oh=93a44395590902d1e6734d66cc8bd8a0&oe=5E955331'
		},
		{
			name: 'PTSD',
			picURL:
				'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.0-8/p960x960/26232267_1587220714690285_7247624497080500269_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=8sHVBZzgMGIAX-7fcCA&_nc_ht=scontent.ftlv5-1.fna&_nc_tp=6&oh=93a44395590902d1e6734d66cc8bd8a0&oe=5E955331'
		}
	];
	return (
		<div className="communities">
			<div className="cmn round-obj"></div>
			<div className="cmn round-obj"></div>
			<div className="cmn round-obj"></div>
			<div className="cmn round-obj"></div>
			<div className="cmn round-obj"></div>
		</div>
	);
};

export default Communities;
