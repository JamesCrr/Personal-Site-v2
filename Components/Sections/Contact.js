import { useRef } from "react";
import styles from "../../styles/sections/Contact.module.scss";
import stylesUnderline from "../../styles/customEffects/underlineEffect.module.scss";
import StyleWrapper from "../StylingHelpers/StyleWrapper";
import useOnceInViewport from "../StylingHelpers/useOnceInViewport";
import { useIconsContext } from "../../pages";

const ContactSection = () => {
	const contactContainerRef = useRef();
	const isVisible = useOnceInViewport(contactContainerRef, "-150px");
	const { getIcon } = useIconsContext();

	return (
		<div ref={contactContainerRef} className={styles.sectionContainer}>
			<div className={styles.sectionTitleDiv}>
				<h2 className={styles.sectionTitle}>
					<StyleWrapper sheets={isVisible ? stylesUnderline.growRight : stylesUnderline.ungrown}>Contact.</StyleWrapper>
				</h2>
			</div>
			<div className={styles.sectionContentDiv}>
				<h3 className={styles.contactTitle}>Let's Get In Touch!</h3>
				<p className={styles.contactTxt}>
					I am always looking for new exciting opportunties to join so my inbox is always open! Whether you have a question or just want to say hi,
					I’ll try my best to get back to you!
				</p>
				<div className={styles.contactIconsDiv}>
					<a>{getIcon("linkedin")}</a>
					<a>{getIcon("email")}</a>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
