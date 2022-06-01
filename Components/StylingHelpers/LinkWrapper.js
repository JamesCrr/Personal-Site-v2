import React from "react";
import styles from "../../styles/customEffects/linkEffect.module.scss";

/**
 * Wraps <a> element around children and styles it with link styles
 * @param {String} linkTo URL path
 * @param {Boolean} newTab Whether to open link in new tab
 * @returns Component to render
 */
const LinkWrapper = React.forwardRef(({ linkTo = "", newTab = false, children }, ref) => {
	return (
		<a ref={ref} href={linkTo} target={newTab ? "_blank" : ""} rel={newTab ? "noopener noreferrer" : ""} className={styles.link}>
			{children}
		</a>
	);
});

export default LinkWrapper;
