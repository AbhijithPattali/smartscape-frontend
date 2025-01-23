import React from "react";

export default function InfoPanel() {
  return (
    <aside style={styles.infoPanel}>
      <h2>Why isn't my info shown here?</h2>
      <p>We're hiding some account details to protect your identity.</p>
      <h2>Which details can be edited?</h2>
      <p>
        Identity verification details can't be changed. You can edit contact
        info and personal details but may need to verify your identity again.
      </p>
      <h2>What info is shared with others?</h2>
      <p>
        Your usage of SmartScape, feedback, and savings percentage may be shared
        with others.
      </p>
    </aside>
  );
}

const styles = {
  infoPanel: {
    width: "25%",
    backgroundColor: "#fff",
    padding: "20px",
    borderLeft: "1px solid #ddd",
  },
};
