import styles from "../../styles/customEffects/linkEffect.module.scss";

/**
 * Wraps <a> element around children and styles it with link styles
 * @param {String} linkTo URL path
 * @param {Boolean} newTab Whether to open link in new tab
 * @returns Component to render
 */
const LinkWrapper = ({ linkTo = "", newTab = false, children }) => {
	return (
		<a href={linkTo} target={newTab ? "_blank" : ""} rel={newTab ? "noopener noreferrer" : ""} className={styles.link}>
			{children}
		</a>
	);
};

export default LinkWrapper;
