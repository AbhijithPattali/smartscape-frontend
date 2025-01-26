import React, { useState } from "react";
import Image from 'next/image';
import { MdPerson, MdSecurity, MdSettings, MdNotifications, MdDevices, MdAccountCircle } from "react-icons/md";
import styles from './Navbar.module.css'; // Import the CSS file

// A separate component for nav items to reduce repetition
const NavItem = ({ name, icon: Icon, activeNavItem, onClick, className }) => (
  <li
    className={`${styles.navItem} ${activeNavItem === name ? styles.activeNavItem : ""} ${className || ""}`}
    onClick={() => onClick(name)}
  >
    {Icon && <Icon className={styles.icon} />} {/* Ensure the icon is rendered */}
    <span className={styles.navText}>{name}</span>
  </li>
);


export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("Profiles");

  // List of nav items with associated icons
  const navItems = [
    { name: "Profiles", icon: MdPerson },
    { name: "Privacy & Security", icon: MdSecurity },
    { name: "Admin Settings", icon: MdSettings },
    { name: "Notifications", icon: MdNotifications },
    { name: "Rooms & Devices", icon: MdDevices },
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
        {navItems.map(({ name, icon }) => (
          <NavItem
            key={name}
            name={name}
            icon={icon}
            activeNavItem={activeNavItem}
            onClick={handleNavItemClick}
          />
        ))}
      </ul>
      {/* Add the account button outside of the main list */}
      <NavItem
        name="Admin XYZ"
        icon={MdAccountCircle}
        activeNavItem={activeNavItem}
        onClick={handleNavItemClick}
        className={styles.accountButton} // Apply custom class for styling
      />
    </nav>
  );
}