import { useEffect, useState } from "react";
import { useThemeContext } from "../Theme/OwnThemeProvider";
import styles from "../../styles//Navbar.module.scss";
import useVerticalScroll from "./useVerticalScroll";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Navbar = (props) => {
	const { darkMode, toggleThemeValue } = useThemeContext(); // Color Mode
	const { isScrollingUp, isScrollingDown } = useVerticalScroll(50); // Scrolling
	// useEffect(() => console.log("Up:", isScrollingUp, "Down:", isScrollingDown));

	/**
	 * Switch the Color mode
	 */
	const switchColorMode = () => {
		console.log("switch color mode");
		toggleThemeValue();
	};
	/**
	 * Scrolls the page to the corresponding section
	 * @param {Number} sectionID what section to scroll to
	 */
	const scrollToSection = (sectionID) => {
		const { aboutSectionRef, experienceSectionRef, projectsSectionRef } = props;
		const scrollOptions = { behavior: "smooth", top: 0 };
		switch (sectionID) {
			case -1:
			case 0:
				scrollOptions.top = aboutSectionRef.current.offsetTop;
				break;
			case 1:
				scrollOptions.top = experienceSectionRef.current.offsetTop;
				break;
			case 2:
				scrollOptions.top = projectsSectionRef.current.offsetTop;
				break;
		}
		/**
		 * Difference between 2 options.
		 * - window.scrollTo({ behavior: 'smooth', top: yourRef.current.offsetTop }) => only IE no support
		 * - element.scrollIntoView({ behavior: 'smooth'}) => IE, Safari no support
		 */
		// Scroll to selected section
		window.scrollTo(scrollOptions);
	};

	return (
		<>
			<div className={styles.navbarDiv}>
				<p>navbar rendered</p>
				<div className={styles.navbarEndContent}>
					{/* Color Mode Icon */}
					<div className={styles.colorModeIcon_HorizontialDiv} onClick={switchColorMode}>
						<ImSun className={!darkMode ? styles.colorModeIcon : `${styles.colorModeIcon} ${styles.colorModeIcon_Fade}`} />
						<FaMoon className={darkMode ? styles.colorModeIcon : `${styles.colorModeIcon} ${styles.colorModeIcon_Fade}`} />
					</div>
					{/* Horizontial Navbar Links */}
					<ul className={styles.hLinksParent}>
						<li onClick={() => scrollToSection(0)} className={styles.hLinkItem}>
							<a>0/ About Me.</a>
						</li>
						<li onClick={() => scrollToSection(1)} className={styles.hLinkItem}>
							<a>1/ Experience.</a>
						</li>
						<li onClick={() => scrollToSection(2)} className={styles.hLinkItem}>
							<a>2/ Projects.</a>
						</li>
					</ul>
				</div>
			</div>
			<MobileMenu scrollToSection={scrollToSection} />
		</>
	);
};

export default Navbar;
