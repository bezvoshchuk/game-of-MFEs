import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/mario">Pick Mario</Link>
    <Link href="/">Home</Link>
    <Link href="/luigi">Pick Luigi</Link>
  </div>
);

export default Nav;
