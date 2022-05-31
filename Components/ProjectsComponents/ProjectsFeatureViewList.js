import styles from "../../styles/projectComponents/ProjectsFeatureViewList.module.scss";
import ProjectFeatureView from "./ProjectFeatureView";

const ProjectsFeatureViewList = ({ projects }) => {
	return (
		<div className={styles.featureProjectsList}>
			{projects.map((data, index) => {
				return <ProjectFeatureView key={index} details={data} textOnLeft={index % 2 ? true : false} />;
			})}
		</div>
	);
};

export default ProjectsFeatureViewList;
