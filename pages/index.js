import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useRef } from "react";
import LandingSection from "../Components/Sections/Landing";
import Navbar from "../Components/Navbar/Navbar";
import AboutSection from "../Components/Sections/About";
import ProjectsSection from "../Components/Sections/Projects";
import ExperienceSection from "../Components/Sections/Experience";

export default function Home() {
	// Section Refs for scrolling
	const aboutSectionRef = useRef();
	const experienceSectionRef = useRef();
	const projectsSectionRef = useRef();
	const contactSectionRef = useRef();

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
		<div className={styles.pageContainer}>
			<Navbar aboutSectionRef={aboutSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} />
			<LandingSection />
			<div id="about-section" ref={aboutSectionRef}>
				<AboutSection />
			</div>
			<div id="experience-section" ref={experienceSectionRef}>
				<ExperienceSection />
			</div>
			<div id="projects-section" ref={projectsSectionRef}>
				<ProjectsSection />
			</div>
		</div>
	);
}
