import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Image
        className={styles.logo}
        src="/logo-small.svg"
        alt="smartscape logo"
        width={82}
        height={67}
        priority
      />
      <div style={styles.userLogoWrapper}>
        <Image
          className={styles.userLogo}
          src="/duotone.svg"
          alt="user logo"
          width={52}
          height={54}
          priority
        />
      </div>
      <ul style={styles.navList}>
        <li style={{ ...styles.navItem, ...styles.activeNavItem }}>
          Profiles <span style={styles.activeNavItemBefore}></span>
        </li>
        <li style={styles.navItem}>Privacy & Security</li>
        <li style={styles.navItem}>Admin Settings</li>
        <li style={styles.navItem}>Notifications</li>
        <li style={styles.navItem}>Rooms & Devices</li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    width: "100%",
    maxWidth: "221px",
    background: "linear-gradient(180deg, #17402A 9%, #3CA66D 100%)",
    color: "#fff",
    padding: "20px",
    overflowX: "hidden",
  },
  userLogoWrapper: {
    marginTop: "-65px",
    marginLeft: "125px", // Adjust this value to move it right
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: "70px", // Add margin to push the nav items down
  },
  navItem: {
    marginBottom: "1em",
    cursor: "pointer",
    color: "#fff",
    padding: "0.8em 1.5em",
    fontSize: "20px", // Slightly larger font size for active item
    transition: "all 0.3s ease", // Smooth transitions
    textAlign: "center",
    fontWeight: 600,
    position: "relative", // Enables stacking context
    zIndex: 1, // Ensures the text stays above the background
  },
  activeNavItem: {
    color: "#17402A",
  },
  activeNavItemBefore: {
    content: '""',
    position: "absolute",
    top: 0,
    left: "5%", // Extend the background beyond the text
    right: "-30%", // Extend equally on both sides
    bottom: 0,
    backgroundColor: "#fff",
    borderRadius: "2em",
    zIndex: -1,
  },
};
