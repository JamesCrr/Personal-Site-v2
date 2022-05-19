import styles from "../../styles/projectComponents/ProjectCard.module.scss";
import IconsDatabase from "./IconsDatabase";

const { getIcon } = IconsDatabase();

const ProjectCard = ({ details }) => {
	const constructTagComponent = (tagName, index) => {
		return (
			<div key={index} className={styles.cardTagDiv}>
				{getIcon(tagName)}
				<p className={styles.cardTagName}>{tagName}</p>
			</div>
		);
	};

	return (
		<div style={{ "--bgurl": `url(${details.image})` }} className={styles.cardDiv}>
			<div className={styles.cardTextDiv}>
				<h4 className={styles.cardTitle}>{details.title}</h4>
				<h4 className={styles.cardDescription}>{details.description}</h4>
			</div>
			<div className={styles.cardTagsListDiv}>
				{details.tags.map((tagName, index) => {
					return constructTagComponent(tagName, index);
				})}
			</div>
		</div>
	);
};

export default ProjectCard;
