import Link from 'next/link';
import styles from '../../styles/Code.module.css';

function Projects({ 
  src, 
  title, 
  stack, 
  description, 
  repo, 
  deployed 
}) {
  return (
    <section className={styles.projectInfo}>
      <img className={styles.gif} src={src} />
      <h2>{title}</h2>
      <p className={styles.projectStack}>{stack}</p>
      <p>{description}</p>
      <Link href={repo}>
        <a className={styles.link}>Code</a>
      </Link>
      <Link href={deployed}>
        <a className={styles.link}>Deployed Site</a>
      </Link>
    </section>
  );
}

export default Projects;
