import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<script
					dangerouslySetInnerHTML={{
						__html: themeInitializerScript,
					}}
				></script>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

// Converts the function into a string, to define it
// Then call the function to execute it
const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()`;
function setInitialColorMode() {
	function getInitialColorMode() {
		// Check LocalStorage, been on site before?
		const persistedPreferenceMode = window.localStorage.getItem("cwx-theme");
		const hasPersistedPreference = typeof persistedPreferenceMode === "string";
		if (hasPersistedPreference) return persistedPreferenceMode;

		// Never been on site bfr, get system prefs
		const preference = window.matchMedia("(prefers-color-scheme: dark)");
		const hasMediaQueryPreference = typeof preference.matches === "boolean";
		// User prefers dark mdoe
		if (hasMediaQueryPreference) return preference.matches ? "dark" : "light";

		// Unable to get system prefs, default light mode
		return "light";
	}
	// Get current Color Mode
	const currentColorMode = getInitialColorMode();
	// Set StyleSheet ??
	document.documentElement.style.setProperty("--initial-color-mode", currentColorMode);
	if (currentColorMode === "dark") document.documentElement.setAttribute("data-theme", currentColorMode);
}
