import Image from "next/image";
import { useIconsContext } from "../../pages";
import styles from "../../styles/projectComponents/ProjectFeatureView.module.scss";

const ProjectFeatureView = ({ details, textOnLeft = true }) => {
	const { getIcon } = useIconsContext();

	const renderIcon = (tagName, key) => {
		return (
			<div key={key} className={styles.tagDiv}>
				<div className={styles.iconImgDiv}>{getIcon(tagName)}</div>
				<p className={styles.iconTxt}>{tagName}</p>
			</div>
		);
	};

	return (
		<div style={{ "--ownFlexDirection": textOnLeft ? "row" : "row-reverse" }} className={styles.featuredDiv}>
			<div className={styles.txtDetailsDiv}>
				<h3 className={styles.txtTitle}>{details.title}</h3>
				<h4 className={styles.txtDescription}>{details.description}</h4>
				<div className={styles.tagsListDiv}>{details.tags.map((element, index) => renderIcon(element, index))}</div>
			</div>
			<div className={styles.imageDiv}>
				<Image
					src={details.image}
					alt={details.title + " Image"}
					// width={489}
					// height={864}
					layout="fill"
				/>
				{/* <img src={details.image} /> */}
			</div>
		</div>
	);
};

export default ProjectFeatureView;
