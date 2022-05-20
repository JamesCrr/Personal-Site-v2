import styles from "../../styles/projectComponents/ProjectCard.module.scss";
import IconsDatabase from "./IconsDatabase";

const { getIcon } = IconsDatabase();

const ProjectCard = ({ details }) => {
	// const getTagIconComponent = (tagName, index) => {
	// 	return (
	// 		<div key={index} className={styles.cardTagIconDiv}>
	// 			{getIcon(tagName)}
	// 			<p className={styles.cardTagIconName}>{tagName}</p>
	// 		</div>
	// 	);
	// };
	/**
	 * Helper function to generate a Tag Word Component
	 * @param {String} tagName Name of tag to find
	 * @param {Number} index ID
	 * @returns Tag Word Component to render
	 */
	const getTagWordComponent = (tagName, index) => {
		return (
			<p key={index} className={styles.cardTagWord}>
				{tagName}
			</p>
		);
	};

	/**
	 * Checks whether link is empty or null
	 * @param {String} link URL to external site
	 * @returns False if empty or null
	 */
	const isActiveLink = (link) => (!link || link === "" ? false : true);

	return (
		<div style={{ "--bgurl": `url(${details.image})` }} className={styles.cardDiv}>
			<div className={styles.bgOverlay}></div>
			{/* Content */}
			<div className={styles.cardContent}>
				<div className={styles.cardTextDiv}>
					<h4 className={styles.cardTitle}>{details.title}</h4>
					<h4 className={styles.cardDescription}>{details.description}</h4>
				</div>
				<div className={styles.cardTagsListDiv}>
					{details.tags.map((tagName, index) => {
						return getTagWordComponent(tagName, index);
					})}
				</div>
				<div className={styles.cardLinksDiv}>
					{isActiveLink(details.linkGithub) && <a>{getIcon("github")}</a>}
					{isActiveLink(details.linkDemo) && <a>{getIcon("external")}</a>}
					{isActiveLink(details.linkVid) && <a>{getIcon("youtube")}</a>}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
