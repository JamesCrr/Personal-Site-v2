//

const ExperienceDatabase = () => {
	const allExperiences = [
		{
			date: "June 2019 - August 2019",
			title: "Game Programmer Intern",
			place: "Kajanni University of Applied Sciences",
			placeLink: "https://www.kamk.fi/en",
			tags: ["Unity", "C#", "Git"],
			points: [
				"Developed and Presented 2 games(2D Platformer & VR) to a satisfactory quality in a span of 6 weeks.",
				"Implemented a Physics-based interaction between the game objects, environment and VR Controllers, from scratch.",
				"Wrote custom editors in the engine for fellow engineers to help accelerate development.",
				"Collaborated with multi-national and multi-disciplinary team of engineers, artists and producers on a daily basis.",
			],
		},
		// {
		// 	date: "June 2019 - September 2019",
		// 	title: "Game Programmer Intern",
		// 	place: "Kajanni University of Applied Sciences",
		// 	placeLink: "https://www.kamk.fi/en",
		// 	points: [
		// 		"Write modern, performant, maintainable code for a diverse array of client and internal projects",
		// 		"Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
		// 		"Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
		// 	],
		// },
	];

	return { allExperiences };
};

export default ExperienceDatabase;
