import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

function Footer() {
  return(
    <footer className={styles.footer}>
      <Link href='https://twitter.com/bbperkz'>twitter</Link>
      <Link href='https://www.linkedin.com/in/brookeperkins/'>linkedin</Link>
      <Link href='https://github.com/brookeperkins'>github</Link>
    </footer>
  )
}

export default Footer;
