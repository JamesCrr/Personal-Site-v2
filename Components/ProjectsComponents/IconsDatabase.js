import { DiSass } from "react-icons/di";
import { RiExternalLinkFill } from "react-icons/ri";
import { SiHtml5, SiCss3, SiCplusplus, SiCsharp, SiOpengl, SiUnity, SiUnrealengine, SiReact, SiGithub } from "react-icons/si";

const IconsDatabase = () => {
	const getIcon = (iconName) => {
		switch (iconName.toLowerCase()) {
			// Languages
			case "sass":
				return <DiSass />;
			case "css":
				return <SiCss3 />;
			case "cpp":
			case "c++":
			case "cplusplus":
				return <SiCplusplus />;
			case "c#":
				return <SiCsharp />;
			// Framworks
			case "opengl":
				return <SiOpengl />;
			// Tools
			case "github":
				return <SiGithub />;
			case "external":
				return <RiExternalLinkFill />;
			default:
				return null;
		}
	};

	return { getIcon };
};

export default IconsDatabase;
