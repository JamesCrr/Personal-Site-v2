import { useIconsContext } from "../../pages";
import Image from "next/image";
import styles from "../../styles/projectComponents/ProjectCardViewCn.module.scss";

const ProjectCardViewCn = ({ details }) => {
	const { getIcon } = useIconsContext();

	/**
	 * Helper function to render a tag component
	 * @param {String} tagName Name of Tag
	 * @param {Number} key React List Identifier
	 * @returns Tag component to render
	 */
	const renderTag = (tagName, key) => {
		return (
			<div key={key} className={styles.tagDiv}>
				<div className={styles.iconImgDiv}>{getIcon(tagName)}</div>
				{/* <p className={styles.iconTxt}>{tagName}</p> */}
			</div>
		);
	};
	/**
	 * Helper function to render a link component
	 * @param {String} linkURL URL Link
	 * @param {String} iconName Name of icon to lookup in database
	 * @returns Link component to render
	 */
	const renderLink = (linkURL, iconName) => {
		if (!linkURL || linkURL === "") return null;
		return (
			<div className={styles.linkIconDiv}>
				<a href={linkURL} target="_blank" rel="noopener noreferrer">
					{getIcon(iconName)}
				</a>
			</div>
		);
	};

	return (
		<div className={styles.cardDiv}>
			<div className={styles.imageDiv}>
				<Image src={details.image} alt={details.title + " Image"} layout="fill" />
			</div>
			<div className={styles.titleDiv}>
				<h3 className={styles.titleTxt}>{details.title}</h3>
				<div className={styles.linksDiv}>
					{renderLink(details.linkGithub, "github")}
					{renderLink(details.linkVid, "youtube")}
					{renderLink(details.linkDemo, "external")}
				</div>
			</div>
			<p className={styles.descriptionTxt}>{details.description}</p>
			<div className={styles.tagsListDiv}>{details.tags.map((element, index) => renderTag(element, index))}</div>
		</div>
	);
};

export default ProjectCardViewCn;
