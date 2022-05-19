import { useRef } from "react";
import ProjectDatabase from "../ProjectsComponents/ProjectsDatabase";
import styles from "../../styles/sections/Projects.module.scss";
import stylesUnderline from "../../styles/stylingHelpers/GrowingUnderline.module.scss";
import useOnceInViewport from "../StylingHelpers/useOnceInViewport";
import EffectsHelper from "../StylingHelpers/EffectsHelper";
import ProjectsCardList from "../ProjectsComponents/ProjectsCardList";

const { vCard } = ProjectDatabase();

const ProjectsSection = () => {
	const experienceContainerRef = useRef();
	const isVisible = useOnceInViewport(experienceContainerRef, "-100px");

	return (
		<div ref={experienceContainerRef} className={styles.sectionContainer}>
			<div className={styles.sectionTitleDiv}>
				<h2 className={styles.sectionTitle}>
					<EffectsHelper sheets={isVisible ? stylesUnderline.growLeft : stylesUnderline.ungrown}>Projects</EffectsHelper>
				</h2>
			</div>
			<div className={styles.sectionContentDiv}>
				<div className={styles.featuredProjectsDiv}></div>
				<div className={styles.otherProjectsDiv}>
					<h3 className={styles.otherProjectsTitle}>Other Projects</h3>
					<ProjectsCardList projects={vCard} />
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
