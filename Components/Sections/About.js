import { useRef } from "react";
// Styling
import styles from "../../styles/sections/About.module.scss";
import fadeStyles from "../../styles/customEffects/fadeInOutEffect.module.scss";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";
import StyleWrapper from "../StylingHelpers/StyleWrapper";

const AboutSection = () => {
	const aboutContainerRef = useRef();
	const isVisible = useIntersectionObserver(aboutContainerRef, "-200px");

	return (
		<div ref={aboutContainerRef} className={styles.sectionContainer}>
			<StyleWrapper sheets={isVisible ? fadeStyles.fadeIn : fadeStyles.faded}>
				<div className={styles.sectionTitleDiv}>
					<h2 className={styles.sectionTitle}>About Me.</h2>
				</div>
				<div className={styles.sectionContentDiv}>
					<p className={styles.aboutTxt}>
						Hi there! My name is Wei xuan and I enjoy creating things that live on the internet. I am a freshman at Singapore Management University
						studying Information Systems with a passion to create software that inspires people to do more. blah blah blah blah blah blah blah blah
						blah blah blah blah blah blah blah blah blah blah blah blah .blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
						blah blah blah blah blah blah blah blah blah blah blah .<br /> <br />
						More recently, I’ve fallen in love with building projects that both look good and do good. I have seen the power of technology and how it
						can greatly better the lives of the less privileged. I have thus been dabbling in both coding and design work that make a difference.
					</p>
				</div>
			</StyleWrapper>
		</div>
	);
};

export default AboutSection;
