import { useRef } from "react";
import styles from "../../styles/sections/About.module.scss";
import stylesUnderline from "../../styles/stylingHelpers/GrowingUnderline.module.scss";
import EffectsHelper from "../StylingHelpers/EffectsHelper";
import useInViewport from "../StylingHelpers/useInViewportOnce";

const AboutSection = () => {
	const aboutContainerRef = useRef();
	const isVisible = useInViewport(aboutContainerRef, "-200px");

	return (
		<div ref={aboutContainerRef} className={styles.landingContainer}>
			<div className={styles.textContainer}>
				<h2 className={styles.txtName}>
					{/* <EffectsHelper sheets={isVisible ? stylesUnderline.grow : stylesUnderline.ungrown} localVars={{ growspeed: "1.2s", growwidth: "30%" }}> */}
					<EffectsHelper sheets={isVisible ? stylesUnderline.grow : stylesUnderline.ungrown}>About</EffectsHelper>
				</h2>
			</div>
		</div>
	);
};

export default AboutSection;
