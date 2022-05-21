import Head from "next/head";
import React, { useRef, useContext } from "react";
import styles from "../styles/Home.module.scss";
import IconsDatabase from "../Components/ProjectsComponents/IconsDatabase";

import LandingSection from "../Components/Sections/Landing";
import Navbar from "../Components/Navbar/Navbar";
import AboutSection from "../Components/Sections/About";
import ProjectsSection from "../Components/Sections/Projects";
import ExperienceSection from "../Components/Sections/Experience";
import ContactSection from "../Components/Sections/Contact";

// Icons
const { getIcon } = IconsDatabase();
// Context for Icons
const IconsContext = React.createContext();
export const useIconsContext = () => useContext(IconsContext);

export default function Home() {
	// Section Refs for scrolling
	const aboutSectionRef = useRef();
	const experienceSectionRef = useRef();
	const projectsSectionRef = useRef();
	const contactSectionRef = useRef();

	return (
		<>
			<IconsContext.Provider value={{ getIcon }}>
				<Head>
					<title>Portfolio</title>
					<meta name="description" content="Portfolio" />
					<link rel="icon" href="/favicon.ico" />
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
				</div>
			</IconsContext.Provider>
		</>
	);
}
