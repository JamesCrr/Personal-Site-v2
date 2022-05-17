import styles from "../../styles/sections/About.module.scss";

const AboutSection = () => {
	return (
		<div id="about-section" className={styles.landingContainer}>
			<div className={styles.textContainer}>
				<h2 className={styles.txtName}>About</h2>
			</div>
		</div>
	);
};

export default AboutSection;
