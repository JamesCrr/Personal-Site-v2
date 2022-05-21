import styles from "../../styles/stylingHelpers/linkEffect.module.scss";

const LinkEffect = ({ props, children }) => {
	return <a className={styles.link}>{children}</a>;
};

export default LinkEffect;
