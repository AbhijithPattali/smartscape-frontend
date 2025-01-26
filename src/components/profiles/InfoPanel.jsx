import React, { useState } from "react";
import { MdShield, MdLock, MdRemoveRedEye } from "react-icons/md";
import styles from './InfoPanel.module.css';

export default function InfoPanel() {
  // State to track the expanded/collapsed sections
  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  // Toggle section visibility
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className={styles.infoPanel}>
      <div className={styles.card}>
        {/* Section 1 */}
        <div className={styles.section}>
          <button className={styles.toggleButton} onClick={() => toggleSection('section1')}>
          <MdShield  size={58} color="#9BBEC7" />
            <h2>Why isn't my info shown here?</h2>
          </button>
          {expandedSections.section1 && (
            <p className={styles.paragraph}>
              We're hiding some account details to protect your identity.
            </p>
          )}
        </div>

        {/* Section 2 */}
        <div className={styles.section}>
          <button className={styles.toggleButton} onClick={() => toggleSection('section2')}>
          <MdLock  size={58} color="#E2C391" /> {/* 55 or 48 */}
            <h2>Which details can be edited?</h2>
          </button>
          {expandedSections.section2 && (
            <p className={styles.paragraph}>
              Identity verification details can't be changed. You can edit contact
              info and personal details but may need to verify your identity again.
            </p>
          )}
        </div>

        {/* Section 3 */}
        <div className={styles.section}>
          <button className={styles.toggleButton} onClick={() => toggleSection('section3')}>
          <MdRemoveRedEye  size={58} color="#A8B7AB" />
            <h2>What info is shared with others?</h2>
          </button>
          {expandedSections.section3 && (
            <p className={styles.paragraph}>
              Your usage of SmartScape, feedback, and savings percentage may be shared
              with others.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};


