import { useDataContext } from "../../pages/_app";
import styles from "../../styles/projectComponents/ProjectCardViewBg.module.scss";

const ProjectCardViewBg = ({ details }) => {
	const { getIcon } = useDataContext();

	// const getTagIconComponent = (tagName, index) => {
	// 	return (
	// 		<div key={index} className={styles.cardTagIconDiv}>
	// 			{getIcon(tagName)}
	// 			<p className={styles.cardTagIconTxt}>{tagName}</p>
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
				{/* Title and Description */}
				<div className={styles.cardTextDiv}>
					<h4 className={styles.cardTitle}>{details.title}</h4>
					<h4 className={styles.cardDescription}>{details.description}</h4>
				</div>
				{/* Tags */}
				<div className={styles.cardTagsListDiv}>
					{details.tags.map((tagName, index) => {
						return getTagWordComponent(tagName, index);
					})}
				</div>
				{/* Links */}
				<div className={styles.cardLinksDiv}>
					{isActiveLink(details.linkGithub) && (
						<a href={details.linkGithub} target="_blank" rel="noopener noreferrer">
							{getIcon("github")}
						</a>
					)}
					{isActiveLink(details.linkDemo) && (
						<a href={details.linkDemo} target="_blank" rel="noopener noreferrer">
							{getIcon("external")}
						</a>
					)}
					{isActiveLink(details.linkVid) && (
						<a href={details.linkVid} target="_blank" rel="noopener noreferrer">
							{getIcon("youtube")}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCardViewBg;
