import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src="/logo-small.svg"
        alt="smartscape logo"
        width={82}
        height={67}
        priority
      />
      <div className={styles.userLogoWrapper}>
        <Image
          className={styles.userLogo}
          src="/duotone.svg"
          alt="user logo"
          width={52}
          height={54}
          priority
        />
      </div>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${styles.activeNavItem}`}>
          Profiles <span className={styles.activeNavItemBefore}></span>
        </li>
        <li className={styles.navItem}>Privacy & Security</li>
        <li className={styles.navItem}>Admin Settings</li>
        <li className={styles.navItem}>Notifications</li>
        <li className={styles.navItem}>Rooms & Devices</li>
      </ul>
    </nav>
  );
}
