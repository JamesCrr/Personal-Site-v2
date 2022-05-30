// import ProjectCardViewBg from "./ProjectCardViewBg";
import ProjectCardViewCn from "./ProjectCardViewCn";
import styles from "../../styles/projectComponents/ProjectsCardViewList.module.scss";

const ProjectsCardList = ({ projects }) => {
	return (
		<div className={styles.cardedProjectsList}>
			{projects.map((project) => {
				// return <ProjectCardViewBg key={project.title} details={project} />;
				return <ProjectCardViewCn key={project.title} details={project} />;
			})}
		</div>
	);
};
export default ProjectsCardList;
