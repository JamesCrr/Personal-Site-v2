import { useRef } from "react";
// Styling
import styles from "../../styles/sections/About.module.scss";
import fadeStyles from "../../styles/customEffects/fadeInOutEffect.module.scss";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";
import StyleWrapper from "../StylingHelpers/StyleWrapper";

const AboutSection = () => {
	const containerRef = useRef();
	const contentRef = useRef();
	const containerVisible = useIntersectionObserver(containerRef);
	const contentVisible = useIntersectionObserver(contentRef, "-70px");

	return (
		<div className={styles.sectionContainer}>
			<StyleWrapper sheets={containerVisible ? fadeStyles.fadeIn : fadeStyles.faded}>
				<div ref={containerRef} className={styles.sectionTitleDiv}>
					<h2 className={styles.sectionTitle}>About Me.</h2>
				</div>
			</StyleWrapper>

			<StyleWrapper sheets={contentVisible ? fadeStyles.fadeIn : fadeStyles.faded}>
				<div ref={contentRef} className={styles.sectionContentDiv}>
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
