import { useRef } from "react";
import { useDataContext } from "../../pages/_app";
import LinkWrapper from "../StylingHelpers/LinkWrapper";
// Styling
import styles from "../../styles/sections/Experience.module.scss";
import fadeStyles from "../../styles/customEffects/fadeInOutEffect.module.scss";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";
import StyleWrapper from "../StylingHelpers/StyleWrapper";

/**
 * Experience List Item Component
 * @param {Object} experienceDetail Details Object
 * @returns JSX Component to render
 */
const ExperienceListItem = ({ experienceDetail }) => {
	/**
	 * Helper function to render links
	 * @param {Object} details Object details
	 * @returns Component to render
	 */
	const renderLocationText = (details) => {
		if (details.placeLink && details.placeLink !== "") {
			return (
				<LinkWrapper linkTo={details.placeLink} newTab>
					{details.place}
				</LinkWrapper>
			);
		}
		// Link not avaliable, just return text
		return <span>{details.place}</span>;
	};

	return (
		<div className={styles.experienceItemDiv}>
			<h3 className={styles.jobTitle}>
				{experienceDetail.title} <span>@ </span>
				{/* <LinkWrapper linkTo={experienceDetail.placeLink} newTab>
					{experienceDetail.place}
				</LinkWrapper> */}
				{renderLocationText(experienceDetail)}
			</h3>
			<h4 className={styles.date}>{experienceDetail.date}</h4>
			<ul className={styles.keypointsList}>
				{experienceDetail.points.map((point, index) => {
					return (
						<li className={styles.keypointItem} key={index}>
							{point}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const ExperienceSection = () => {
	const { allExperiences } = useDataContext();
	const experienceSectionRef = useRef();
	const isVisible = useIntersectionObserver(experienceSectionRef, "-100px");

	return (
		<div ref={experienceSectionRef} className={styles.sectionContainer}>
			<StyleWrapper sheets={isVisible ? fadeStyles.fadeIn : fadeStyles.faded}>
				<div className={styles.sectionTitleDiv}>
					<h2 className={styles.sectionTitle}>Experience.</h2>
				</div>
				<div className={styles.sectionContentDiv}>
					<div className={styles.experiencesListDiv}>
						{allExperiences.map((experience, index) => (
							<ExperienceListItem experienceDetail={experience} key={index} />
						))}
					</div>
				</div>
			</StyleWrapper>
		</div>
	);
};

export default ExperienceSection;
