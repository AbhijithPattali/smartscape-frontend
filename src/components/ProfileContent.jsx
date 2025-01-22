import React from "react";

export default function ProfileContent() {
  return (
    <main style={styles.mainContent}>
      <h1 style={styles.header}>Your Profile</h1>
      <div style={styles.profileBox}>
        <p>Admin XYZ</p>
        <p>xyz1234@hw.ac.uk</p>
      </div>
      <div>
        <h2>Personal Info</h2>
        <ul style={styles.infoList}>
          <li>
            <strong>Legal Name:</strong> Gerald
          </li>
          <li>
            <strong>Email Address:</strong> g*****@hw.ac.uk
          </li>
          <li>
            <strong>Phone Numbers:</strong> Not Provided
          </li>
          <li>
            <strong>Government ID:</strong> Not Provided
          </li>
          <li>
            <strong>Address:</strong> Not Provided
          </li>
        </ul>
      </div>
    </main>
  );
}

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  profileBox: {
    backgroundColor: "#e0e0e0",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  infoList: {
    listStyle: "none",
    padding: 0,
  },
};
