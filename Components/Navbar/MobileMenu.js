import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { ImSun } from "react-icons/im";
import { FaMoon } from "react-icons/fa";
import { useThemeContext } from "../Theme/OwnThemeProvider";
import styles from "../../styles/Navbar.module.scss";

const MobileMenu = (props) => {
	const { darkMode, toggleThemeValue } = useThemeContext(); // Color Mode
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Menu

	/**
	 * Mobile Menu Icon was clicked
	 */
	const mobileMenuClicked = () => {
		console.log("MobileMenu Clicked");
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<div className={mobileMenuOpen ? styles.mobileMenuDiv : `${styles.mobileMenuDiv} ${styles.mobileMenuDiv_Close}`}>
			<div className={styles.mobileMenuIconsDiv}>
				{/* Color Mode Icon */}
				<div className={styles.colorModeIcon_VerticalDiv} onClick={toggleThemeValue}>
					<ImSun className={!darkMode ? styles.colorModeIcon : `${styles.colorModeIcon} ${styles.colorModeIcon_Fade}`} />
					<FaMoon className={darkMode ? styles.colorModeIcon : `${styles.colorModeIcon} ${styles.colorModeIcon_Fade}`} />
				</div>
				{/* Mobile Menu Icon */}
				<div className={styles.mobileMenuIconDiv} onClick={mobileMenuClicked}>
					<RiMenu4Fill className={!mobileMenuOpen ? styles.mobileMenuIcon : `${styles.mobileMenuIcon} ${styles.mobileMenuIcon_Fade}`} />
					<VscChromeClose className={mobileMenuOpen ? styles.mobileMenuIcon : `${styles.mobileMenuIcon} ${styles.mobileMenuIcon_Fade}`} />
				</div>
			</div>
			{/* Vertical Navbar Links */}
			<ul className={mobileMenuOpen ? styles.vLinksParent : `${styles.vLinksParent} ${styles.vLinksParent_Close}`}>
				<li onClick={() => props.scrollToSection(0)} className={styles.vLinkItem}>
					<a>0/ About Me.</a>
				</li>
				<li onClick={() => props.scrollToSection(1)} className={styles.vLinkItem}>
					<a>1/ Experience.</a>
				</li>
				<li onClick={() => props.scrollToSection(2)} className={styles.vLinkItem}>
					<a>2/ Projects.</a>
				</li>
			</ul>
			{/* Background */}
			<div className={mobileMenuOpen ? styles.mobileMenuBackground : `${styles.mobileMenuBackground} ${styles.mobileMenuBackground_Close}`}></div>
		</div>
	);
};

export default MobileMenu;
