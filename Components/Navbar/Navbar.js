import { useEffect, useState } from "react";
import { useThemeContext } from "../Theme/OwnThemeProvider";
import styles from "../../styles/Navbar.module.scss";
import useVerticalScroll from "./useVerticalScroll";
import MobileMenu from "./MobileMenu";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";
import { RiMenu4Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = (props) => {
	const { darkMode, toggleThemeValue } = useThemeContext(); // Color Mode
	const { isScrollingUp, isScrollingDown } = useVerticalScroll(50); // Scrolling
	// useEffect(() => console.log("Up:", isScrollingUp, "Down:", isScrollingDown));
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile Menu

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

	/**
	 * Mobile Menu Icon was clicked
	 */
	const mobileMenuIconClicked = () => {
		console.log("MobileMenu Clicked");
		setMobileMenuOpen(!mobileMenuOpen);
		// Toggle styling to lock scrolling
		document.body.classList.toggle("lockScroll");
	};
	/**
	 * Closes the Mobile Menu
	 */
	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
		document.body.classList.remove("lockScroll");
	};
	/**
	 * Ensures the Mobile Menu is closed if users change
	 * from portrait to landspace mode when menu is still open
	 */
	useEffect(() => {
		if (!mobileMenuOpen) return;
		// console.log("SUBBB");
		window.addEventListener("resize", closeMobileMenu);
		return () => {
			// console.log("UNSUBBB");
			window.removeEventListener("resize", closeMobileMenu);
		};
	}, [mobileMenuOpen]);

	return (
		<div className={isScrollingUp ? styles.navbarDiv : styles.navbarDiv}>
			<ImSun />
			<div className={styles.hNavbarEndContent}>
				<div className={styles.iconsDiv}>
					{/* Color Mode Icon */}
					<div className={styles.colorModeIconDiv} onClick={switchColorMode}>
						<ImSun className={!darkMode ? styles.colorModeIcon : styles.colorModeIcon_Fade} />
						<FaMoon className={darkMode ? styles.colorModeIcon : styles.colorModeIcon_Fade} />
					</div>
					{/* Mobile Menu Icon */}
					<div className={styles.mobileMenuIconDiv} onClick={mobileMenuIconClicked}>
						<RiMenu4Fill className={!mobileMenuOpen ? styles.mobileMenuIcon : styles.mobileMenuIcon_Fade} />
						<VscChromeClose className={mobileMenuOpen ? styles.mobileMenuIcon : styles.mobileMenuIcon_Fade} />
					</div>
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

			{/* Mobile Menu */}
			<MobileMenu scrollToSection={scrollToSection} mobileMenuOpen={mobileMenuOpen} closeMobileMenuFunc={closeMobileMenu} />
		</div>
	);
};

export default Navbar;
