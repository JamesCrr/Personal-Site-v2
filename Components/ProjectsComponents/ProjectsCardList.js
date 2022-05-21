import ProjectCard from "./ProjectCard";
import styles from "../../styles/projectComponents/ProjectsCardList.module.scss";

const ProjectsCardList = ({ projects }) => {
	return (
		<div className={styles.cardedProjectsList}>
			{projects.map((project) => {
				return <ProjectCard key={project.title} details={project} />;
			})}
		</div>
	);
};
export default ProjectsCardList;
