//

/************* Project Template *************
"title": {
    description: "",
    image: "url(project-imgs/)",
    tags: [],	// Recommend 6 Tags only
    // linkGithub: "",
    // linkDemo: "",
}
*********************************************/
const ProjectDatabase = () => {
	const allProjects = {
		"Computer Graphics": {
			description:
				"Project to learn more about OpenGL. Shaders, Heightmaps, OpenGL Buffers, Hierarchy modelling, Particle effects and importing of Meshes.",
			image: "/project-imgs/CG_3.webp",
			tags: ["OpenGL", "C++", "OpenGL", "C++", "OpenGL", "C++"],
			linkGithub: "q",
			linkDemo: "q",
			linkVid: "q",
		},
		"Factory Escape": {
			description: "An endless runner game that relies on skill and quick reaction times in order to succeed.",
			image: "/project-imgs/Robot_2.webp",
			tags: ["Unity", "C#"],
			linkGithub: "q",
			linkDemo: "q",
			linkVid: "https://www.youtube.com/watch?v=QpqdQ1-NSdU",
		},
		"The Druid": {
			description:
				"Become a Druid where you command powerful wild animals to help you survive in the harsh wilderness. Take their form to hunt and gather resources to upgrade your camp and unlock more unique animals.",
			image: "/project-imgs/Druid_7.webp",
			tags: ["Unity", "C#"],
			linkGithub: "q",
			linkDemo: "q",
			linkVid: "q",
		},
		Infestation: {
			description:
				"A Shoot em up, Multiplayer LAN, Co-op Game. Fight your way through hordes of enemies and scavenge various weapon parts. Fit those different parts together to create your very own unique weapons. Work together in order to survive and see how long you'll last...",
			image: "/project-imgs/FYP2_2.webp",
			tags: ["Unity", "C#"],
			linkGithub: "q",
			linkDemo: "q",
			linkVid: "q",
		},
	};
	Object.freeze(allProjects);
	const cards = ["Computer Graphics", "Factory Escape", "The Druid", "Infestation"];
	// Get the first 3 as Featured
	const featured = Object.getOwnPropertyNames(allProjects).slice(0, 3);

	/**
	 * Gets an Array of Objects that contains the project data from your selection.
	 * @param {Oject} selected Array of project names to query from
	 * @returns Array of Objects containing project data of those names
	 */
	const getProjects = (selected) => {
		const result = [];
		for (const projectName of selected) {
			if (!allProjects[projectName]) continue;
			// Add title property and add into array
			result.push({ title: projectName, ...allProjects[projectName] });
		}
		return result;
	};
	/**
	 * Converts the All Projets Data Object into an Array
	 * @returns Array of all Projects
	 */
	const convertAllProjectsToArray = () =>
		Object.keys(allProjects).map((projectName) => {
			return { ...allProjects[projectName], title: projectName };
		});

	return { allProjects: convertAllProjectsToArray(), pFeature: getProjects(featured), pCard: getProjects(cards) };
};

export default ProjectDatabase;
