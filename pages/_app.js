import React, { useContext } from "react";
import OwnThemeProvider from "../Components/Theme/OwnThemeProvider";
import IconsDatabase from "../data/IconsDatabase";
import ProjectDatabase from "../data/ProjectsDatabase";
import "../styles/modules/colors.css";
import "../styles/globals.scss";

// Projects
const { allProjects, pFeature, pCard } = ProjectDatabase();
// Icons
const { getIcon } = IconsDatabase();
const DataContext = React.createContext();
export const useDataContext = () => useContext(DataContext);

function MyApp({ Component, pageProps }) {
	return (
		<OwnThemeProvider>
			<DataContext.Provider value={{ getIcon, allProjects, pFeature, pCard }}>
				<Component {...pageProps} />
			</DataContext.Provider>
		</OwnThemeProvider>
	);
}

export default MyApp;
