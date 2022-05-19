import { useState, useEffect } from "react";
import styles from "../../styles/projectComponents/ProjectCard.module.scss";

const ProjectCard = ({ details }) => {
	useEffect(() => {
		console.log(details);
	}, []);

	return (
		<div style={{ "--bgurl": `url(${details.image})` }} className={styles.cardDiv}>
			<h4>{details.title}</h4>
			<h4>{details.description}</h4>
			<h4>{details.image}</h4>
		</div>
	);
};

export default ProjectCard;
