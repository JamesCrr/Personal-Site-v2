import Link from "next/link";
import { useDataContext } from "../../pages/_app";
import ProjectsCardList from "../ProjectsComponents/ProjectsCardViewList";
import ProjectsFeatureViewList from "../ProjectsComponents/ProjectsFeatureViewList";
// Styling
import styles from "../../styles/sections/Projects.module.scss";
import linkStyles from "../../styles/customEffects/linkEffect.module.scss";

const ProjectsSection = () => {
	const { pFeature, pCard } = useDataContext();

	return (
		<div className={styles.sectionContainer}>
			<div className={styles.sectionTitleDiv}>
				<h2 className={styles.sectionTitle}>Projects.</h2>
			</div>
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
