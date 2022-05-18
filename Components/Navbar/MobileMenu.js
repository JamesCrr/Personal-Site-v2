import styles from "../../styles/Navbar.module.scss";

const MobileMenu = (props) => {
	/**
	 * Nav Link clicked, scroll to that section
	 * @param {Number} idClicked ID of section to navigate to
	 */
	const navLinkClicked = (idClicked) => {
		props.scrollToSection(idClicked);
		props.closeMobileMenuFunc();
	};

	return (
		<div className={props.mobileMenuOpen ? styles.mobileMenuDiv : styles.mobileMenuDiv_Close}>
			{/* Vertical Navbar Links */}
			<ul className={props.mobileMenuOpen ? styles.vLinksParent : styles.vLinksParent_Close}>
				<li onClick={() => navLinkClicked(0)} className={styles.vLinkItem}>
					<a>0/ About Me.</a>
				</li>
				<li onClick={() => navLinkClicked(1)} className={styles.vLinkItem}>
					<a>1/ Experience.</a>
				</li>
				<li onClick={() => navLinkClicked(2)} className={styles.vLinkItem}>
					<a>2/ Projects.</a>
				</li>
			</ul>
			{/* Background */}
			<div className={props.mobileMenuOpen ? styles.mobileMenuBackground : styles.mobileMenuBackground_Close}></div>
		</div>
	);
};

export default MobileMenu;
