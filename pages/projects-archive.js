import Link from "next/link";
import Head from "next/head";
import { useDataContext } from "../pages/_app";
import styles from "../styles/ProjectsArchive.module.scss";
import linkStyles from "../styles/customEffects/linkEffect.module.scss";

const ProjectsArchivePage = () => {
	const { getIcon, allProjects } = useDataContext();

	/**
	 * Helper function to render a link component
	 * @param {String} linkURL URL Link
	 * @param {String} iconName Name of icon to lookup in database
	 * @returns Link component to render
	 */
	const renderLink = (linkURL, iconName) => {
		if (!linkURL || linkURL === "") return null;
		return (
			<div className={styles.itemLinkIconDiv}>
				<a href={linkURL} target="_blank" rel="noopener noreferrer">
					{getIcon(iconName)}
				</a>
			</div>
		);
	};
	/**
	 * Helper function to create a project item component to render
	 * @param {Object} details Object containing the project details
	 * @returns Component to render
	 */
	const renderProjectItem = (details) => {
		return (
			<div className={styles.listItemRowDiv} key={details.title}>
				<div className={styles.listItemColumnDiv_Date}>
					<h4 className={styles.itemDateTxt}>{details.date}</h4>
				</div>

				<div className={styles.listItemColumnDiv_Project}>
					<div className={styles.itemTitleDiv}>
						<h3 className={styles.itemTitleTxt}>{details.title}</h3>
						{/* Links for Mobile View */}
						<div className={styles.itemLinksDiv_NextToTitle}>
							{renderLink(details.linkGithub, "github")}
							{renderLink(details.linkVid, "youtube")}
							{renderLink(details.linkDemo, "external")}
						</div>
					</div>
					<p className={styles.itemDescriptionTxt}>{details.description}</p>
				</div>
				<div className={styles.listItemColumnDiv_Tags}>
					<div className={styles.itemTagsDiv}>
						{details.tags.map((tagName, index) => {
							return (
								<div key={index} className={styles.itemTagIconDiv}>
									<div className={styles.itemTagIconImageDiv}>{getIcon(tagName)}</div>
									<p className={styles.itemTagIconTxt}>{tagName}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.listItemColumnDiv_Links}>
					<div className={styles.itemLinksDiv}>
						{renderLink(details.linkGithub, "github")}
						{renderLink(details.linkVid, "youtube")}
						{renderLink(details.linkDemo, "external")}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.projectArchiveDiv}>
			<Head>
				<title>Archive</title>
				<meta name="description" content="Project Archive List" />
				<link rel="icon" href="/project-imgs/logo.png" />
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
					<p className={styles.descriptionTxt}>Here lies the project archive which holds all of the notable projects I have done.</p>
				</div>
				<div className={styles.listDiv}>
					<div className={`${styles.listItemRowDiv} ${styles.listItemPropertyTitleRowDiv}`}>
						<div className={styles.listItemColumnDiv_Date}>
							<h4 className={styles.listItemPropertyTitleTxt}>Date</h4>
						</div>

						<div className={styles.listItemColumnDiv_Project}>
							<h4 className={styles.listItemPropertyTitleTxt}>Project</h4>
						</div>
						<div className={styles.listItemColumnDiv_Tags}>
							<h4 className={styles.listItemPropertyTitleTxt}>Built With</h4>
						</div>
						<div className={styles.listItemColumnDiv_Links}>
							<h4 className={styles.listItemPropertyTitleTxt}>Links</h4>
						</div>
					</div>
					{allProjects.map((projectDetails) => {
						return renderProjectItem(projectDetails);
					})}
				</div>
			</div>
		</div>
	);
};
export default ProjectsArchivePage;
