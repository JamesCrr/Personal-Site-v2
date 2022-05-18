import { useState, useEffect } from "react";

const useInViewportOnce = (targetElement, rootMargin = "0px") => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Create observer and observe targetElement.current
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setIsVisible(entry.isIntersecting);
				observer.disconnect(); // Unobserve all for this observer
			},
			{ rootMargin }
		);
		observer.observe(targetElement.current);
		// Unobserve when unmounting
		return () => observer.unobserve(targetElement.current);
	}, []);

	return isVisible;
};

export default useInViewportOnce;
