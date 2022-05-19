import { DiSass } from "react-icons/di";
import { SiHtml5, SiCss3, SiCplusplus, SiCsharp, SiOpengl, SiUnity, SiUnrealengine, SiReact } from "react-icons/si";

const IconsDatabase = () => {
	const getIcon = (iconName) => {
		switch (iconName.toLowerCase()) {
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

			case "opengl":
				return <SiOpengl />;
			default:
				return null;
		}
	};

	return { getIcon };
};

export default IconsDatabase;
