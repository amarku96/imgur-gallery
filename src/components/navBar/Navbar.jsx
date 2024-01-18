import React from 'react';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-brand']}>Imgur Gallery</div>
    </nav>
  );
}

export default Navbar;
