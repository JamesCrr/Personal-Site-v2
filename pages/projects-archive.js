import Link from "next/link";
import Head from "next/head";
import { useDataContext } from "../pages/_app";
import styles from "../styles/ProjectsArchive.module.scss";
import linkStyles from "../styles/customEffects/linkEffect.module.scss";

const ProjectsArchivePage = () => {
	const { getIcon, allProjects } = useDataContext();

	/**
	 * Helper function to create a project item component to render
	 * @param {Object} details Object containing the project details
	 * @returns Component to render
	 */
	const renderProjectItem = (details) => {
		return (
			<div className={styles.itemDiv} key={details.title}>
				<h3 className={styles.itemTitleTxt}>{details.title}</h3>
				<p className={styles.itemDescriptionTxt}>{details.description}</p>
				<div className={styles.itemTagsDiv}>
					{details.tags.map((tagName, index) => {
						return (
							<div key={index} className={styles.itemTagIconDiv}>
								{getIcon(tagName)}
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	return (
		<div className={styles.projectArchiveDiv}>
			<Head>
				<title>Projects Archive</title>
				<meta name="description" content="Portfolio Projects Archive" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.archiveNavbar}>
				<div className={styles.siteLogoDiv}>
					<h4 className={styles.siteLogoTxt}>Wx.</h4>
				</div>
			</div>
			<div className={styles.archiveContent}>
				<div className={styles.textContentDiv}>
					<h2 className={styles.titleTxt}>Projects Archive</h2>
					<div className={styles.backLinkDiv}>
						<Link href="/" passHref>
							<a className={linkStyles.link}>Return to main site.</a>
						</Link>
					</div>
					<p className={styles.descriptionTxt}>
						Here lies the project archive. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque sem, porta eget nisl id, convallis
						aliquet augue. Proin accumsan condimentum ante, quis accumsan nibh elementum at. Suspendisse lobortis luctus nunc sagittis blandit. Aenean
						ullamcorper, nibh venenatis condimentum sollicitudin, neque magna laoreet velit, dapibus volutpat quam purus sed diam.
					</p>
				</div>
				<div className={styles.listDiv}>
					{allProjects.map((projectDetails) => {
						return renderProjectItem(projectDetails);
					})}
				</div>
			</div>
		</div>
	);
};
export default ProjectsArchivePage;
