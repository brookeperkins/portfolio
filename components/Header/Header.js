import Link from 'next/link';
import Fleur from '../Illustrations/Fleur';
import styles from '../../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <p>
        <Link href='/'>
        <a>
          <Fleur />
        </a>
      </Link>
      </p>
      <Link href='/about'>about</Link>
      <Link href='/code'>projects</Link>
      <Link href='/connect'>connect</Link>
      <Link href='/bpresume.pdf'>resume</Link>
    </header>
  )
}

export default Header;
