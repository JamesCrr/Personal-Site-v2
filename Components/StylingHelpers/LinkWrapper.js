import styles from "../../styles/stylingHelpers/linkEffect.module.scss";

const LinkEffect = ({ linkTo, newTab = false, children }) => {
	return (
		<a href={linkTo} target={newTab ? "_blank" : ""} rel={newTab ? "noopener noreferrer" : ""} className={styles.link}>
			{children}
		</a>
	);
};

export default LinkEffect;
