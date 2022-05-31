import { useRef } from "react";
import styles from "../../styles/sections/About.module.scss";
import stylesUnderline from "../../styles/customEffects/growingUnderlineEffect.module.scss";
import StyleWrapper from "../StylingHelpers/StyleWrapper";
import useOnceInViewport from "../StylingHelpers/useOnceInViewport";

const AboutSection = () => {
	const aboutContainerRef = useRef();
	const isVisible = useOnceInViewport(aboutContainerRef);

	return (
		<div ref={aboutContainerRef} className={styles.sectionContainer}>
			<div className={styles.sectionTitleDiv}>
				<h2 className={styles.sectionTitle}>
					{/* <StyleWrapper sheets={isVisible ? stylesUnderline.growRight : stylesUnderline.ungrown}>About Me.</StyleWrapper> */}
					About Me.
				</h2>
			</div>
			<div className={styles.sectionContentDiv}>
				<p className={styles.textAbout}>
					Hi there! My name is Wei xuan and I enjoy creating things that live on the internet. I am a freshman at Singapore Management University
					studying Information Systems with a passion to create software that inspires people to do more. blah blah blah blah blah blah blah blah blah
					blah blah blah blah blah blah blah blah blah blah blah .blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
					blah blah blah blah blah blah blah blah blah .<br /> <br />
					More recently, I’ve fallen in love with building projects that both look good and do good. I have seen the power of technology and how it
					can greatly better the lives of the less privileged. I have thus been dabbling in both coding and design work that make a difference.
				</p>
			</div>
		</div>
	);
};

export default AboutSection;
