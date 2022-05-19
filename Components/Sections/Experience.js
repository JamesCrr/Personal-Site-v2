import { useRef } from "react";
import styles from "../../styles/sections/Experience.module.scss";
import stylesUnderline from "../../styles/stylingHelpers/GrowingUnderline.module.scss";
import useOnceInViewport from "../StylingHelpers/useOnceInViewport";
import EffectsHelper from "../StylingHelpers/EffectsHelper";

const ExperienceSection = () => {
	const experienceContainerRef = useRef();
	const isVisible = useOnceInViewport(experienceContainerRef, "-100px");

	return (
		<div ref={experienceContainerRef} className={styles.sectionContainer}>
			<div className={styles.sectionTitleDiv}>
				<h2 className={styles.sectionTitle}>
					<EffectsHelper sheets={isVisible ? stylesUnderline.growLeft : stylesUnderline.ungrown}>Experience</EffectsHelper>
				</h2>
			</div>
		</div>
	);
};

export default ExperienceSection;
