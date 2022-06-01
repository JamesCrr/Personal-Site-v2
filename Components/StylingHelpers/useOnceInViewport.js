import { useState, useEffect } from "react";

/**
 * Hook that creates an IntersectionOberver to observe when the target element intersects the page. Once
 * element intersects page, will immediately unobserve element and stop updating
 * @param {Object} targetRef Element to observe
 * @param {String} rootMargin How much of the element should intersects before conside intersecting
 * @returns Whether the target element intersects the page
 */
const useOnceInViewport = (targetRef, rootMargin = "-100px") => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Create observer and observe targetRef.current
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setIsVisible(entry.isIntersecting);
				observer.disconnect(); // Unobserve all for this observer
			},
			{ rootMargin }
		);
		observer.observe(targetRef.current);
		// Unobserve when unmounting
		return () => targetRef.current && observer.unobserve(targetRef.current);
	}, []);

	return isVisible;
};

export default useOnceInViewport;
