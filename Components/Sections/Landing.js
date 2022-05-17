import styles from "../../styles/sections/Landing.module.scss";

const LandingSection = () => {
	return (
		<div className={styles.landingContainer}>
			<div className={styles.textContainer}>
				<h6 className={styles.txtHello}>Hi there! I'm</h6>
				<h2 className={styles.txtName}>Wei Xuan.</h2>
				<h3 className={styles.txtWhatIDo}>I build software for people.</h3>
			</div>
			<div className={styles.textContainer}>
				<h4>Currently a student @</h4>
			</div>
		</div>
	);
};

export default LandingSection;
