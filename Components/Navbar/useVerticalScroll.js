import { useState, useEffect } from "react";

const useVerticalScroll = (threshold = 100) => {
	const [scrollObject, setScrollObject] = useState({ currentScroll: 0, prevScroll: 0 });

	const getScrollChange = () => scrollObject.currentScroll - scrollObject.prevScroll;

	useEffect(() => {
		let currentScroll = window.pageYOffset;
		let prevScroll = currentScroll;

		const updateScrollValue = () => {
			if (Math.abs(window.pageYOffset - currentScroll) < threshold) return;
			// console.log("PREV:", currentScroll, "NEW VAL:", window.pageYOffset);
			prevScroll = currentScroll;
			currentScroll = window.pageYOffset;
			setScrollObject({ currentScroll, prevScroll });
		};
		const onScroll = () => {
			// window.requestAnimationFrame(updateScrollValue);
			updateScrollValue();
		};

		window.addEventListener("scroll", onScroll);
		// Unregister Listener when unmounting
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return { lastThresholdValue: scrollObject.currentScroll, isScrollingUp: getScrollChange() < 0, isScrollingDown: getScrollChange() > 0 };
};
export default useVerticalScroll;
