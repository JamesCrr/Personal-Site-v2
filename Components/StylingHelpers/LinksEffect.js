import styles from "../../styles/stylingHelpers/LinksEffect.module.scss";

const LinksEffect = ({ props, children }) => {
	return <a className={styles.link}>{children}</a>;
};

export default LinksEffect;
