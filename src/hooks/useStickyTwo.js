import { useState, useEffect, useRef } from 'react';

export const useStickyTwo = (sum, end) => {
	const [position, setPosition] = useState(0);

	const offsetTopSum = useRef(null);

	useEffect(() => {
		const abortController = new AbortController();
		const { signal } = abortController;
		const mediaQuery = window.matchMedia('(max-width: 1000px)');

		var lastScrollTop = 0;

		if (sum.current && end.current && !mediaQuery.matches) {
			offsetTopSum.current =
				end.current.getBoundingClientRect().top -
				sum.current.getBoundingClientRect().top;

			window.addEventListener(
				'resize',
				() => {
					offsetTopSum.current =
						end.current.getBoundingClientRect().top -
						sum.current.getBoundingClientRect().top;
				},
				{ signal: signal }
			);
		} else window.removeEventListener('resize', () => {});

		if (!mediaQuery.matches) {
			window.addEventListener(
				'scroll',
				() => {
					var st = window.pageYOffset || document.documentElement.scrollTop;
					if (st > lastScrollTop) {
						if (offsetTopSum.current) setPosition(offsetTopSum.current);
					} else {
						if (offsetTopSum.current) setPosition(0);
					}
					lastScrollTop = st <= 0 ? 0 : st;
				},
				{ signal: signal }
			);
		} else window.removeEventListener('scroll', () => {});

		return () => abortController.abort();
	}, [end, sum]);

	return position;
};
