import React, { useState } from "react";
import Image from 'next/image';
import styles from './Navbar.module.css'; // Import the CSS file

// A separate component for nav items to reduce repetition
const NavItem = ({ name, activeNavItem, onClick }) => (
  <li
    className={`${styles.navItem} ${activeNavItem === name ? styles.activeNavItem : ""}`}
    onClick={() => onClick(name)}
  >
    {name}
  </li>
);

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("Profiles");

  // List of nav items to render, can be expanded easily
  const navItems = [
    "Profiles",
    "Privacy & Security",
    "Admin Settings",
    "Notifications",
    "Rooms & Devices",
  ];

  const handleNavItemClick = (item) => setActiveNavItem(item);

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
          src="/user.svg"
          alt="user logo"
          width={52}
          height={54}
          priority
        />
      </div>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <NavItem
            key={item}
            name={item}
            activeNavItem={activeNavItem}
            onClick={handleNavItemClick}
          />
        ))}
      </ul>
    </nav>
  );
}
