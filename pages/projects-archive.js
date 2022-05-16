import Link from "next/link";
import styles from "../styles/ProjectsArchive.module.scss";

const ProjectsArchivePage = () => {
	return (
		<div className={styles.listContainer}>
			<h1 className={styles.title}>Archive List</h1>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<h3 className={styles.projectListItem}>Project..</h3>
			<button className={styles.backBtn}>
				<Link href="/">Back Home</Link>
			</button>
		</div>
	);
};
export default ProjectsArchivePage;
