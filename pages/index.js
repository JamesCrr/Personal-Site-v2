import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../Components/Theme/OwnThemeProvider";
import LandingSection from "../Components/Sections/Landing";

export default function Home() {
	const { darkMode, toggleThemeValue } = useContext(ThemeContext);

	const switchTheme = () => {
		console.log("switch theme");
		toggleThemeValue();
	};

	return (
		// <div className={styles.container}>
		// 	<Head>
		// 		<title>Portfolio</title>
		// 		<meta name="description" content="Portfolio" />
		// 		<link rel="icon" href="/favicon.ico" />
		// 	</Head>

		// 	<h1 className={styles.testingText}>Testing Wow</h1>
		// 	<div className={styles.imageContainer}>
		// 		<Image src="/projects/CG_3.webp" alt="Computer Graphics" width={987} height={745} layout="fill" objectFit="fill" />
		// 	</div>
		// 	<div className={styles.imageContainer}>
		// 		<Image src="/projects/Robot_2.webp" alt="Computer Graphics" width={489} height={864} layout="fill" objectFit="contain" />
		// 	</div>
		// 	<button className={styles.themeBtn} onClick={switchTheme}>
		// 		Toggle to {darkMode ? "light" : "dark"}
		// 	</button>
		// 	<button className={styles.themeBtn}>
		// 		<Link href="/projects-archive">Archive</Link>
		// 	</button>
		// </div>
		<>
			<LandingSection />
		</>
	);
}
