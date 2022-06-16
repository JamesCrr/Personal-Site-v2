import { useRef } from "react";
import Link from "next/link";
import { useDataContext } from "../../pages/_app";
import ProjectsCardList from "../ProjectsComponents/ProjectsCardViewList";
import ProjectsFeatureViewList from "../ProjectsComponents/ProjectsFeatureViewList";
// Styling
import StyleWrapper from "../StylingHelpers/StyleWrapper";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";
import styles from "../../styles/sections/Projects.module.scss";
import linkStyles from "../../styles/customEffects/linkEffect.module.scss";
import fadeStyles from "../../styles/customEffects/fadeInOutEffect.module.scss";

const ProjectsSection = () => {
	const titleRef = useRef();
	const titleVisible = useIntersectionObserver(titleRef);
	const { pFeature, pCard } = useDataContext();

	return (
		<div className={styles.sectionContainer}>
			<StyleWrapper sheets={titleVisible ? fadeStyles.fadeIn : fadeStyles.faded}>
				<div ref={titleRef} className={styles.sectionTitleDiv}>
					<h2 className={styles.sectionTitle}>Projects.</h2>
				</div>
			</StyleWrapper>
			<div className={styles.sectionContentDiv}>
				<ProjectsFeatureViewList projects={pFeature} />
				<div className={styles.otherProjectsDiv}>
					<h3 className={styles.otherProjectsTitle}>Other Projects</h3>
					<h4 className={styles.archiveLinkDiv}>
						<Link href="/projects-archive" passHref>
							<a className={linkStyles.link}>view the archive</a>
						</Link>
					</h4>
					<ProjectsCardList projects={pCard} />
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
