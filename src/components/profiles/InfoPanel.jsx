import React from "react";
import Image from "next/image";
import styles from "./InfoPanel.module.css"; // Import the CSS file

export default function InfoPanel() {
  return (
    <aside className={styles.infoPanel}>
      <Image
        className={styles.logo}
        src="/safety.svg"
        alt="safety"
        width={55}
        height={48}
        priority
      />
      <h2>Why isn't my info shown here?</h2>
      <p className={styles.paragraph}>
        We're hiding some account details to protect your identity.
      </p>
      <Image
        className={styles.logo}
        src="/lock.svg"
        alt="lock"
        width={55}
        height={48}
        priority
      />
      <h2>Which details can be edited?</h2>
      <p className={styles.paragraph}>
        Identity verification details can't be changed. You can edit contact
        info and personal details but may need to verify your identity again.
      </p>
      <Image
        className={styles.logo}
        src="/eye.svg"
        alt="eye"
        width={55}
        height={48}
        priority
      />
      <h2>What info is shared with others?</h2>
      <p className={styles.paragraph}>
        Your usage of SmartScape, feedback, and savings percentage may be shared
        with others.
      </p>
    </aside>
  );
}
