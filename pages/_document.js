import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
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
