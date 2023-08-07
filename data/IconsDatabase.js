import { DiSass } from "react-icons/di";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiCplusplus,
    SiCsharp,
    // SiJava,
    // SiKotlin,
    SiPython,
    SiPandas,
    SiOpengl,
    SiUnity,
    SiUnrealengine,
    SiNodedotjs,
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiRedux,
    SiReactrouter,
    SiSocketdotio,
    SiMongodb,
    SiFirebase,
    SiMaterialui,
    SiGit,
    SiGithub,
    SiLinkedin,
    SiYoutube,
    SiDiscord,
    SiHeroku,
    SiSteam,
} from "react-icons/si";

const IconsDatabase = () => {
    const getIcon = (iconName) => {
        switch (iconName.toLowerCase()) {
            // Languages
            case "html":
                return <SiHtml5 />;
            case "sass":
                return <DiSass />;
            case "css":
                return <SiCss3 />;
            case "javascript":
                return <SiJavascript />;
            case "python":
                return <SiPython />;
            case "cpp":
            case "c++":
            case "cplusplus":
                return <SiCplusplus />;
            case "c#":
            case "csharp":
                return <SiCsharp />;
            // Framworks/Libraries
            case "pandas":
                return <SiPandas />;
            case "nodejs":
                return <SiNodedotjs />;
            case "react":
            case "react native":
                return <SiReact />;
            case "nextjs":
                return <SiNextdotjs />;
            case "express":
                return <SiExpress />;
            case "redux":
                return <SiRedux />;
            case "react router":
                return <SiReactrouter />;
            case "socketio":
                return <SiSocketdotio />;
            case "mongodb":
                return <SiMongodb />;
            case "firebase":
                return <SiFirebase />;
            case "mui":
                return <SiMaterialui />;
            case "opengl":
                return <SiOpengl style={{ transform: "scale(1.6)" }} />;
            // Game Engines
            case "unity":
                return <SiUnity />;
            case "unreal":
                return <SiUnrealengine />;
            // Tools
            case "git":
                return <SiGit />;
            case "github":
                return <SiGithub />;
            case "linkedin":
                return <SiLinkedin />;
            case "email":
                return <MdEmail style={{ transform: "scale(1.2)" }} />;
            case "youtube":
                return <SiYoutube />;
            case "external":
                return <RiExternalLinkFill />;
            case "discord":
                return <SiDiscord />;
            case "heroku":
                return <SiHeroku />;
            case "steam":
                return <SiSteam />;
            default:
                return null;
        }
    };

    return { getIcon };
};

export default IconsDatabase;
