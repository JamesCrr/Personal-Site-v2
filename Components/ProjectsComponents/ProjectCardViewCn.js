import { useRef } from "react";
import Image from "next/image";
import { useDataContext } from "../../pages/_app";
// Styling
import styles from "../../styles/projectComponents/ProjectCardViewCn.module.scss";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";

const ProjectCardViewCn = ({ details }) => {
	const cardRef = useRef();
	const isVisible = useIntersectionObserver(cardRef);
	const { getIcon } = useDataContext();

	/**
	 * Helper function to render a tag component
	 * @param {String} tagName Name of Tag
	 * @param {Number} key React List Identifier
	 * @returns Tag component to render
	 */
	const renderTag = (tagName, key) => {
		return (
			<div key={key} className={styles.tagIconDiv}>
				<div className={styles.tagIconImgDiv}>{getIcon(tagName)}</div>
				{/* <p className={styles.tagIconTxt}>{tagName}</p> */}
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
		<div className={`${styles.cardDiv} ${isVisible ? styles.cardFadeIn : styles.cardFaded}`} ref={cardRef}>
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
			{/* <div className={styles.tagsListDiv}>{details.tags.map((element, index) => renderTag(element, index))}</div> */}
		</div>
	);
};

export default ProjectCardViewCn;
