import { useRef } from "react";
// Styling
import styles from "../../styles/sections/About.module.scss";
import linkStyles from "../../styles/customEffects/linkEffect.module.scss";
import fadeStyles from "../../styles/customEffects/fadeInOutEffect.module.scss";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";
import StyleWrapper from "../StylingHelpers/StyleWrapper";

const AboutSection = () => {
	const containerRef = useRef();
	const contentRef = useRef();
	const containerVisible = useIntersectionObserver(containerRef, "-20px");
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
						Hi there! I'm Wei Xuan and I enjoy creating things that you can interact with, however small it may be. I started my programming journey
						at Nanyang Polytechnic, learning in-depth technical skills to develop Games for various platforms, from PC to VR and even PS4.
						<br /> <br />
						But more recently, my focus has shifted to building things that has an impact not just in the gaming realm. One such pursuit has been
						towards Full-stack development accompanied with a modest involvement of Dev-ops.
						<br /> <br />
						Oh, and I'm also an Information Systems student at{""}
						<a className={linkStyles.link} href="https://www.smu.edu.sg/" target="_blank" rel="noopener noreferrer">
							Singapore Management University.
						</a>
						{/* More recently, I’ve fallen in love with building projects that both look good and do good. I have seen the power of technology and how it
						can greatly better the lives of the less privileged. I have thus been dabbling in both coding and design work that make a difference. */}
					</p>
				</div>
			</StyleWrapper>
		</div>
	);
};

export default AboutSection;
