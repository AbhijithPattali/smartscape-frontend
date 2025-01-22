import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>Profiles</li>
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
    width: "221px",
    background: 'linear-gradient(180deg, #17402A 9%, #3CA66D 100%)',
    color: "#fff",
    padding: "20px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginBottom: "15px",
    cursor: "pointer",
  },
};
