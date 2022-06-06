import { useState, useEffect } from "react";

/**
 * Hook that creates an IntersectionOberver to observe when the target element intersects the page. Once
 * element intersects page, will immediately unobserve element and stop updating
 * @param {Object} targetRef Element to observe
 * @param {String} rootBottomMargin How much to modify the bounding box's intersecting bottom margin
 * @param {Boolean} disconnectOnDetect Stop checking for intersections once intersected once
 * @returns Whether the target element intersects the page
 */
const useIntersectionObserver = (targetRef, rootBottomMargin = "-200px", disconnectOnDetect = true) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Create observer and observe targetRef.current
		const observer = new IntersectionObserver(
			([entry]) => {
				// if (!entry.isIntersecting) return;
				setIsVisible(entry.isIntersecting);
				if (disconnectOnDetect && entry.isIntersecting) observer.disconnect(); // Unobserve all for this observer
			},
			{ rootMargin: `0px 0px ${rootBottomMargin} 0px` }
		);
		observer.observe(targetRef.current);
		// Unobserve when unmounting
		return () => targetRef.current && observer.unobserve(targetRef.current);
	}, []);

	return isVisible;
};

export default useIntersectionObserver;
