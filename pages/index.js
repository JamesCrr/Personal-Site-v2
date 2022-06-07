import Head from "next/head";
import { useRef } from "react";
import styles from "../styles/Home.module.scss";
// Components
import Navbar from "../Components/Navbar/Navbar";
import LandingSection from "../Components/Sections/Landing";
import AboutSection from "../Components/Sections/About";
import ProjectsSection from "../Components/Sections/Projects";
import ExperienceSection from "../Components/Sections/Experience";
import ContactSection from "../Components/Sections/Contact";
// import Footer from "../Components/Sections/Footer";

export default function Home() {
	// Section Refs for scrolling
	const aboutSectionRef = useRef();
	const experienceSectionRef = useRef();
	const projectsSectionRef = useRef();
	const contactSectionRef = useRef();

	return (
		<>
			<Head>
				<title>Weixuan.</title>
				<meta
					name="description"
					content="Hi there! I am Wei Xuan, a software engineer based on the sunny island of Singapore. This is my Portfolio website where I showcase all of my past and present work. Dont't hesitate to reach out if you have any questions! Thanks for visiting!"
				/>
				<link rel="icon" href="/project-imgs/logo.png" />
			</Head>
			<div className={styles.pageContainer}>
				<Navbar
					aboutSectionRef={aboutSectionRef}
					experienceSectionRef={experienceSectionRef}
					projectsSectionRef={projectsSectionRef}
					contactSectionRef={contactSectionRef}
				/>
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
				<div id="contact-section" ref={contactSectionRef}>
					<ContactSection />
				</div>
				{/* <Footer /> */}
			</div>
		</>
	);
}
