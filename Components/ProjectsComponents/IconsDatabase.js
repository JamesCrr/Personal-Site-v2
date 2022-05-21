import { DiSass } from "react-icons/di";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { SiHtml5, SiCss3, SiCplusplus, SiCsharp, SiOpengl, SiUnity, SiUnrealengine, SiReact, SiGithub, SiLinkedin } from "react-icons/si";

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
				return <SiCplusplus style={{ transform: "scale(0.6)" }} />;
			case "c#":
			case "csharp":
				return <SiCsharp />;
			// Framworks
			case "react":
				return <SiReact />;
			case "opengl":
				return <SiOpengl />;
			// Game Engines
			case "unity":
				return <SiUnity />;
			case "unreal":
				return <SiUnrealengine />;
			// Tools
			case "github":
				return <SiGithub />;
			case "linkedin":
				return <SiLinkedin style={{ transform: "scale(0.8)" }} />;
			case "email":
				return <MdEmail />;
			case "external":
				return <RiExternalLinkFill />;
			default:
				return null;
		}
	};

	return { getIcon };
};

export default IconsDatabase;
