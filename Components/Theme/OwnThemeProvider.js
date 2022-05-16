import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

const OwnThemeProvider = (props) => {
	const [darkMode, setDarkMode] = useState(undefined);

	// Modify Theme
	const setThemeValue = (newDarkMode) => setDarkMode(newDarkMode);
	const toggleThemeValue = () => setDarkMode(!darkMode);

	useEffect(() => {
		// Preferences not found yet, don't set anything
		if (darkMode === undefined) return;
		// Set Style Attributes according to mode
		const htmlTag = document.documentElement;
		if (darkMode) {
			htmlTag.setAttribute("data-theme", "dark");
			window.localStorage.setItem("cwx-theme", "dark");
		} else {
			htmlTag.removeAttribute("data-theme");
			window.localStorage.setItem("cwx-theme", "light");
		}
	}, [darkMode]);
	useEffect(() => {
		// Fetch initial preferences and setState
		const initialColorValue = document.documentElement.style.getPropertyValue("--initial-color-mode");
		setDarkMode(initialColorValue === "dark");
	}, []);

	return <ThemeContext.Provider value={{ darkMode, setThemeValue, toggleThemeValue }}>{props.children}</ThemeContext.Provider>;
};

export default OwnThemeProvider;
