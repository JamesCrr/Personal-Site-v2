import styles from "../../styles/sections/Footer.module.scss";
import { useDataContext } from "../../pages/_app";

const Footer = () => {
	const { getIcon } = useDataContext();

	return (
		<div className={styles.footerDiv}>
			<div className={styles.siteLogoDiv}>
				<h4 className={styles.siteLogoTxt}>Wx.</h4>
			</div>
			<div className={styles.msgDiv}>
				<h4 className={styles.msgTxt}>Thanks for stopping by!</h4>
			</div>
			{/* <div className={styles.iconsDiv}>
				<div className={styles.iconLink}>{getIcon("github")}</div>
				<div className={styles.iconLink}>{getIcon("linkedin")}</div>
				<div className={styles.iconLink}>{getIcon("email")}</div>
			</div> */}
		</div>
	);
};

export default Footer;
