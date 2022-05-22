import { useRef } from "react";
import useOnceInViewport from "../StylingHelpers/useOnceInViewport";
import ProjectDatabase from "../ProjectsComponents/ProjectsDatabase";
import ProjectsCardList from "../ProjectsComponents/ProjectsCardList";
import ProjectsFeatureViewList from "../ProjectsComponents/ProjectsFeatureViewList";
import styles from "../../styles/sections/Projects.module.scss";
import stylesUnderline from "../../styles/customEffects/underlineEffect.module.scss";
import StyleWrapper from "../StylingHelpers/StyleWrapper";

const { vFeature, vCard } = ProjectDatabase();

const ProjectsSection = () => {
	const experienceContainerRef = useRef();
	const isVisible = useOnceInViewport(experienceContainerRef, "-150px");

	return (
		<div ref={experienceContainerRef} className={styles.sectionContainer}>
			<div className={styles.sectionTitleDiv}>
				<h2 className={styles.sectionTitle}>
					<StyleWrapper sheets={isVisible ? stylesUnderline.growLeft : stylesUnderline.ungrown}>Projects.</StyleWrapper>
				</h2>
			</div>
			<div className={styles.sectionContentDiv}>
				<ProjectsFeatureViewList projects={vFeature} />
				<div className={styles.otherProjectsDiv}>
					<h3 className={styles.otherProjectsTitle}>Other Projects</h3>
					<h4 className={styles.archiveLinkDiv}>
						<a>view the archive</a>
					</h4>
					<ProjectsCardList projects={vCard} />
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
