import React, { useContext } from "react";
import OwnThemeProvider from "../Components/Theme/OwnThemeProvider";
// Data
import IconsDatabase from "../data/IconsDatabase";
import ProjectDatabase from "../data/ProjectsDatabase";
import ExperienceDatabase from "../data/ExperienceDatabase";
// Styling
import "../styles/modules/colors.css";
import "../styles/globals.scss";

// Fetching Data
const { allExperiences } = ExperienceDatabase(); // Experiences
const { allProjects, pFeature, pCard } = ProjectDatabase(); // Projects
const { getIcon } = IconsDatabase(); // Icons
// Context
const DataContext = React.createContext();
export const useDataContext = () => useContext(DataContext);

function MyApp({ Component, pageProps }) {
	return (
		<OwnThemeProvider>
			<DataContext.Provider value={{ getIcon, allProjects, pFeature, pCard, allExperiences }}>
				<Component {...pageProps} />
			</DataContext.Provider>
		</OwnThemeProvider>
	);
}

export default MyApp;
