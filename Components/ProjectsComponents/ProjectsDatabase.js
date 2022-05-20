//

/************* Project Template *************
"title": {
    description: "",
    image: "url(project-imgs/)",
    tags: [],
    // linkGithub: "",
    // linkDemo: "",
}
*********************************************/
const ProjectDatabase = () => {
	const data = {
		"Computer Graphics": {
			description:
				"Project to learn more about OpenGL. Shaders, Heightmaps, OpenGL Buffers, Hierarchy modelling, Particle effects and importing of Meshes.",
			image: "/project-imgs/CG_3.webp",
			tags: ["OpenGL", "C++"],
			linkGithub: "w",
			linkDemo: "w",
		},
		Robot_2: {
			description: "RobotRobot Robot, RobotRobot Robot, RobotRobot Robot, RobotRobot Robot, RobotRobot Robot, RobotRobot Robot, pop.",
			image: "/project-imgs/Robot_2.webp",
			tags: [],
			linkGithub: "w",
			linkDemo: "w",
		},
		"The Druid": {
			description: "DruidDruid Druid, DruidDruid Druid, DruidDruid Druid, DruidDruid Druid, DruidDruid Druid, DruidDruid Druid, pop.",
			image: "/project-imgs/Root_2.webp",
			tags: [],
			linkGithub: "w",
			linkDemo: "",
		},
		Infestation: {
			description:
				"Infestation Infestation, Infestation Infestation, Infestation Infestation, Infestation Infestation, Infestation Infestation, Infestation Infestation, pop.",
			image: "/project-imgs/Robot_2.webp",
			tags: [],
			linkGithub: "w",
			linkDemo: "",
		},
	};
	Object.freeze(data);
	const cards = ["Computer Graphics", "Robot_2", "The Druid", "Infestation"];

	/**
	 *
	 * @param {Oject} selected Array of project names
	 * @returns Array of Objects containing project data of those names
	 */
	const getProjectsFromSelected = (selected) => {
		const result = [];
		for (const projectName of selected) {
			if (!data[projectName]) continue;
			result.push({ title: projectName, ...data[projectName] });
		}
		return result;
	};

	return { data, vFeature: null, vCard: getProjectsFromSelected(cards) };
};

export default ProjectDatabase;
