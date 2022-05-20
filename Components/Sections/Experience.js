import { useRef } from "react";
import styles from "../../styles/sections/Experience.module.scss";
import useOnceInViewport from "../StylingHelpers/useOnceInViewport";

const ExperienceSection = () => {
	const experienceContainerRef = useRef();
	const isVisible = useOnceInViewport(experienceContainerRef, "-100px");

	return (
		<div ref={experienceContainerRef} className={styles.sectionContainer}>
			<div className={styles.sectionTitleDiv}>
				<h2 className={styles.sectionTitle}>Experience</h2>
			</div>
		</div>
	);
};

export default ExperienceSection;
