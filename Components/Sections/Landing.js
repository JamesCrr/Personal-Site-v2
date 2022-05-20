import styles from "../../styles/sections/Landing.module.scss";

const LandingSection = () => {
	return (
		<div className={styles.landingContainer}>
			<div className={styles.textDiv}>
				<h6 className={styles.txtHello}>Hi there! I'm</h6>
				<h2 className={styles.txtName}>Wei Xuan.</h2>
				<h3 className={styles.txtWhatIDo}>I build software for people.</h3>
				<h4 className={styles.txtWhereIAm}>Currently a student @ SMU</h4>
			</div>
		</div>
	);
};

export default LandingSection;
