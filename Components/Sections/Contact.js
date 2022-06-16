import { useRef } from "react";
import { useDataContext } from "../../pages/_app";
// Styling
import styles from "../../styles/sections/Contact.module.scss";
import fadeStyles from "../../styles/customEffects/fadeInOutEffect.module.scss";
import useIntersectionObserver from "../StylingHelpers/useIntersectionObserver";
import StyleWrapper from "../StylingHelpers/StyleWrapper";

const ContactSection = () => {
	const contactRef = useRef();
	const isVisible = useIntersectionObserver(contactRef);
	const { getIcon } = useDataContext();

	return (
		<div ref={contactRef} className={styles.sectionContainer}>
			<StyleWrapper sheets={isVisible ? fadeStyles.fadeIn : fadeStyles.faded}>
				<div className={styles.sectionTitleDiv}>
					<h2 className={styles.sectionTitle}>Contact.</h2>
				</div>
				<div className={styles.sectionContentDiv}>
					<h3 className={styles.contactTitle}>Let's Get In Touch!</h3>
					<p className={styles.contactTxt}>
						I am always looking for new exciting opportunties to join so my inbox is always open! Whether you have a question or just want to say hi,
						I’ll try my best to get back to you!
					</p>
					<div className={styles.contactIconsDiv}>
						<a href="https://sg.linkedin.com/in/chinweixuan" target="_blank" rel="noopener noreferrer">
							{getIcon("linkedin")}
						</a>
						<a href="mailto:cwx5283@gmail.com" target="_blank">
							{getIcon("email")}
						</a>
					</div>
				</div>
			</StyleWrapper>
		</div>
	);
};

export default ContactSection;
