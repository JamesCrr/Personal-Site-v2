// Styling
import StyleWrapper from "../StylingHelpers/StyleWrapper";
import styles from "../../styles/sections/Landing.module.scss";
import linkStyles from "../../styles/customEffects/linkEffect.module.scss";

const LandingSection = () => {
	return (
		<div className={styles.landingContainer}>
			<div className={styles.textContentDiv}>
				<StyleWrapper sheets={styles.landingFadeIn} localVars={{ "animation-delay": "0.2s" }}>
					<h6 className={styles.txtHello}>Hi there! I'm</h6>
					<h2 className={styles.txtName}>Wei Xuan.</h2>
				</StyleWrapper>
				<StyleWrapper sheets={styles.landingFadeIn} localVars={{ "animation-delay": "0.5s" }}>
					<h3 className={styles.txtWhatIDo}>I build software for people.</h3>
				</StyleWrapper>
				<StyleWrapper sheets={styles.landingFadeIn} localVars={{ "animation-delay": "0.8s" }}>
					<h4 className={styles.txtWhereIAm}>
						Currently a student <span>@</span>{" "}
						<a className={linkStyles.link} href="https://www.smu.edu.sg/" target="_blank" rel="noopener noreferrer">
							<span style={{ fontWeight: 500 }}>SMU</span>
						</a>
					</h4>
				</StyleWrapper>
			</div>
		</div>
	);
};

export default LandingSection;
