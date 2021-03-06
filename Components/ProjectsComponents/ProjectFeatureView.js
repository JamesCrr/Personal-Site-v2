import { useRef } from "react";
import Image from "next/image";
import { useDataContext } from "../../pages/_app";
// Styling
import styles from "../../styles/projectComponents/ProjectFeatureView.module.scss";
import fadeStyles from "../../styles/customEffects/fadeInOutEffect.module.scss";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";
import StyleWrapper from "../StylingHelpers/StyleWrapper";

const ProjectFeatureView = ({ details, textOnLeft = true }) => {
	const featuredRef = useRef();
	const isVisible = useIntersectionObserver(featuredRef);
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
				<p className={styles.tagIconTxt}>{tagName}</p>
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
		<StyleWrapper sheets={isVisible ? fadeStyles.fadeIn : fadeStyles.faded}>
			<div style={{ "--ownFlexDirection": textOnLeft ? "row" : "row-reverse" }} className={styles.featuredDiv} ref={featuredRef}>
				<div className={styles.txtDetailsDiv}>
					<div className={styles.titleDiv}>
						{/* Title */}
						<h3 className={styles.titleTxt}>{details.title}</h3>
						{/* Links */}
						<div className={styles.linksDiv}>
							{renderLink(details.linkGithub, "github")}
							{renderLink(details.linkVid, "youtube")}
							{renderLink(details.linkDemo, "external")}
						</div>
					</div>
					{/* Description */}
					<h4 className={styles.descriptionTxt}>{details.description}</h4>
					{/* Tags */}
					<div className={styles.bwDiv}>
						{/* <h4 className={styles.bwTxt}>Built with:</h4> */}
						<div className={styles.tagsListDiv}>{details.tags.map((element, index) => renderTag(element, index))}</div>
					</div>
				</div>
				{/* Image */}
				<div as="image" className={styles.imageDiv}>
					<Image
						src={details.image}
						alt={details.title + " Image"}
						layout="fill"
						// width={489}
						// height={864}
						priority={true}
					/>
				</div>
			</div>
		</StyleWrapper>
	);
};

export default ProjectFeatureView;
