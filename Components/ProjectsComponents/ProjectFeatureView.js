import Image from "next/image";
import { useIconsContext } from "../../pages";
import styles from "../../styles/projectComponents/ProjectFeatureView.module.scss";

const ProjectFeatureView = ({ details, textOnLeft = true }) => {
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
				<p className={styles.iconTxt}>{tagName}</p>
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
		<div style={{ "--ownFlexDirection": textOnLeft ? "row" : "row-reverse" }} className={styles.featuredDiv}>
			<div className={styles.txtDetailsDiv}>
				<div className={styles.titleDiv}>
					<h3 className={styles.titleTxt}>{details.title}</h3>
					<div className={styles.linksDiv}>
						{renderLink(details.linkGithub, "github")}
						{renderLink(details.linkVid, "youtube")}
						{renderLink(details.linkDemo, "external")}
					</div>
				</div>
				<h4 className={styles.descriptionTxt}>{details.description}</h4>
				<div className={styles.bwDiv}>
					<h4 className={styles.bwTxt}>Built with:</h4>
					<div className={styles.tagsListDiv}>{details.tags.map((element, index) => renderTag(element, index))}</div>
				</div>
			</div>
			<div className={styles.imageDiv}>
				<Image
					src={details.image}
					alt={details.title + " Image"}
					// width={489}
					// height={864}
					layout="fill"
				/>
			</div>
		</div>
	);
};

export default ProjectFeatureView;
