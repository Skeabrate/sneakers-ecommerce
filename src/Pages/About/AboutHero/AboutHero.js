import React, { useRef, useEffect } from 'react';
import { Wrapper, StyledArrow, StyledHeroImg } from './AboutHero.styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imgLoad } from '../../../helpers/imgLoad';

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
	const tl = useRef(null);

	const arrowRef = useRef(null);
	const wrapperRef = useRef(null);

	useEffect(() => {
		var image = document.createElement('img');
		image.src = imgLoad(wrapperRef.current);
		image.onload = function () {
			tl.current.play();
		};

		tl.current = gsap.timeline({ paused: true });

		if (tl.current) {
			tl.current
				.to(wrapperRef.current, {
					opacity: 1,
					duration: 0.6,
					scale: 1,
				})
				.to(arrowRef.current, {
					opacity: 1,
					duration: 0.6,
				});
		}

		const mediaQuery = window.matchMedia('(max-width: 550px)');

		if (!mediaQuery.matches) {
			if (wrapperRef.current) {
				wrapperRef.current.style.backgroundPosition = '50% 0px';

				gsap.to(wrapperRef.current, {
					backgroundPosition: `50% ${window.innerHeight / 4}px`,
					ease: 'none',
					scrollTrigger: {
						trigger: wrapperRef.current,
						start: 'top top',
						end: 'bottom',
						scrub: true,
					},
				});
			}
		}
	}, []);

	return (
		<Wrapper>
			<StyledHeroImg ref={wrapperRef} />

			<StyledArrow
				to="content"
				smooth={true}
				duration={800}
				spy={true}
				exact={true}
				role="navigation"
				aria-label="scroll to content"
			>
				<svg
					ref={arrowRef}
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
				</svg>
			</StyledArrow>
		</Wrapper>
	);
};

export default AboutHero;
