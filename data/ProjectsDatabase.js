//

const ProjectDatabase = () => {
	const allProjects = {
		"Intraday Trading Bot": {
			date: 2020,
			description: "A Intraday Trading Bot that tries to use Technical Analysis to earn small profits on the Stock Market.",
			image: "/project-imgs/IntradayBot_0.webp",
			tags: ["Python", "Pandas"],
			linkGithub: "https://github.com/JamesCrr/Intraday-Trading-Bot",
			linkDemo: "",
			linkVid: "",
		},
		"GameDeals Bot": {
			date: 2020,
			description: "A Discord Bot that scrapes r/GameDeals on Reddit for discounts or free deals on Games.",
			image: "/project-imgs/gameDealBot_0.webp",
			tags: ["Javascript", "Discord"],
			linkGithub: "https://github.com/JamesCrr/Discord-GameDeals-Bot",
			linkDemo: "",
			linkVid: "",
		},
		"Ball Rookers": {
			date: 2019,
			description:
				"A Top 10 entry for the JamesCook University 48hr GameJam. A couch Co-op, physics based game that challenges your reaction speed and quick reflexes!",
			image: "/project-imgs/Cook19_0.webp",
			tags: ["Unity", "C#", "Git"],
			linkGithub: "",
			linkDemo: "",
			linkVid: "https://www.youtube.com/watch?v=5EZ4r2y_pPA",
		},
		"Survival of the Animents": {
			date: 2018,
			description:
				"A Spell Bending Survival game. Combine 4 base elements to create over 16 unique spell combinations that each interacts differently with the environment and enemies. There are also 4 different game modes to challenge yourself in!",
			image: "/project-imgs/p_0.webp",
			tags: ["Unity", "C#", "Git"],
			linkGithub: "",
			linkDemo: "",
			linkVid: "https://www.youtube.com/watch?v=nDbO5j1FVvk",
		},
		"Factory Escape": {
			date: 2018,
			description:
				"A small but fun endless runner game that relies on skill and quick reaction times in order to succeed. Created in 5 days for IGCC Game Jam.",
			image: "/project-imgs/Robot_0.webp",
			tags: ["Unity", "C#", "Git"],
			linkGithub: "",
			linkDemo: "",
			linkVid: "https://www.youtube.com/watch?v=QpqdQ1-NSdU",
		},
		"The Druid": {
			date: 2019,
			description:
				"Become a Druid where you command powerful wild animals to help you survive in the harsh wilderness. Take their form to hunt and gather resources to upgrade your camp and unlock more unique animals. Developed using SteamVR and HTC Vive.",
			image: "/project-imgs/Druid_7.webp",
			tags: ["Unity", "C#", "Git"],
			linkGithub: "",
			linkDemo: "",
			linkVid: "",
		},
		Infestation: {
			date: 2019,
			description:
				"A Multiplayer-LAN, Shoot-em-up, Co-op game. Fight your way through hordes of enemies and scavenge various powerful weapon parts. Combine different parts together to create your very own unique weapons. Work together in order to survive and see how long you'll last...",
			image: "/project-imgs/FYP2_2.webp",
			tags: ["Unity", "C#", "Git"],
			linkGithub: "",
			linkDemo: "",
			linkVid: "",
		},
		"Pathfinding & AI": {
			date: 2018,
			description: "Project to learn about Pathfinding algorithms and how to apply them. Implemented algorithms such as A*, DFS, BFS.",
			image: "/project-imgs/pathsim2.webp",
			tags: ["OpenGL", "C++"],
			linkGithub: "",
			linkDemo: "",
			linkVid: "",
		},
		"Computer Graphics": {
			date: 2018,
			description:
				"Project to learn more about OpenGL by working with Shaders, Heightmaps, OpenGL Buffers, Hierarchy modelling, Particle effects and importing of Meshes.",
			image: "/project-imgs/CG_3.webp",
			tags: ["OpenGL", "C++"],
			linkGithub: "",
			linkDemo: "",
			linkVid: "",
		},
	};
	Object.freeze(allProjects);
	const cards = ["Pathfinding & AI", "Factory Escape", "The Druid", "Infestation"];
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
	const convertAllProjectsToArray = () => {
		let dataArray = Object.keys(allProjects).map((projectName) => {
			return { ...allProjects[projectName], title: projectName };
		});
		// Sort to make newest at top
		dataArray = dataArray.sort((first, second) => {
			if (first.date > second.date) return -1;
			if (first.date < second.date) return 1;
			return 0;
		});
		return dataArray;
	};

	return { allProjects: convertAllProjectsToArray(), pFeature: getProjects(featured), pCard: getProjects(cards) };
};

export default ProjectDatabase;
