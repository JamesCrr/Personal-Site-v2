import styles from "../../styles/sections/Landing.module.scss";
import LinkWrapper from "../StylingHelpers/LinkWrapper";

const LandingSection = () => {
	return (
		<div className={styles.landingContainer}>
			<div className={styles.textDiv}>
				<h6 className={styles.txtHello}>Hi there! I'm</h6>
				<h2 className={styles.txtName}>Wei Xuan.</h2>
				<h3 className={styles.txtWhatIDo}>I build software for people.</h3>
				<h4 className={styles.txtWhereIAm}>
					Currently a student @{" "}
					<LinkWrapper>
						<span style={{ fontWeight: 500 }}>SMU</span>
					</LinkWrapper>
				</h4>
			</div>
		</div>
	);
};

export default LandingSection;
