import styles from "../../styles/sections/Footer.module.scss";
import { useIconsContext } from "../../pages";

const Footer = () => {
	const { getIcon } = useIconsContext();

	return (
		<div className={styles.footerDiv}>
			<div className={styles.msgDiv}>
				<h4 className={styles.msg}>Thanks for stopping by</h4>
			</div>
		</div>
	);
};

export default Footer;
