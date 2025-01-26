import React from "react";
import Image from "next/image";
import styles from "./ProfileContent.module.css";

export default function ProfileContent() {
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.header}>Your Profile</h1>
      <div className={styles.profileBox}>
        {/* Edit and Delete Icons */}
        <div className={styles.actionIcons}>
          <button className={styles.iconButton}>
            <Image src="/edit.svg" alt="Edit" width={22} height={22} />
          </button>
          <button className={styles.iconButton}>
            <Image src="/delete.svg" alt="Delete" width={22} height={22} />
          </button>
        </div>

        {/* Profile Info */}
        <div className={styles.profileInfo}>
          <Image
            className={styles.logo}
            src="/user-2.svg"
            alt="user"
            width={52}
            height={54}
            priority
          />
          <div className={styles.textContainer}>
            <p>Admin XYZ</p>
            <p>xyz1234@hw.ac.uk</p>
          </div>
        </div>

        {/* Sign-Out Button */}
        <button className={styles.signOutButton}>Sign Out</button>
      </div>

      {/* User Icons */}
      <div className={styles.userIcons}>
        <button className={styles.iconWithText}>
          <Image src="/user-manage.svg" alt="Manage" width={24} height={24} />
          <span>Manage your account</span>
        </button>
        <button className={styles.iconWithText}>
          <Image src="/user-switch.svg" alt="Switch" width={24} height={24} />
          <span>Switch account</span>
        </button>
        <button className={styles.iconWithText}>
          <Image src="/user-add.svg" alt="Add" width={24} height={24} />
          <span>Add account</span>
        </button>
      </div>

      <div>
      <h2 className={styles.personalInfo}>Personal Info</h2>
      <ul className={styles.infoList}>
        <li className={styles.infoItem}>
          <div className={styles.infoTitle}>
            Legal name <button className={styles.editButton}>Edit</button>
          </div>
          <div className={styles.infoValue}>Gerald</div>
          <div className={styles.infoUnderline}></div>
        </li>
        <li className={styles.infoItem}>
          <div className={styles.infoTitle}>
            Email address <button className={styles.editButton}>Edit</button>
          </div>
          <div className={styles.infoValue}>g*****@hw.ac.uk</div>
          <div className={styles.infoUnderline}></div>
        </li>
        <li className={styles.infoItem}>
          <div className={styles.infoTitle}>
            Phone numbers <button className={styles.editButton}>Add</button>
          </div>
          <div className={styles.infoValue}>Add a number to get in touch with you. You can add other numbers and choose how they're used.</div>
          <div className={styles.infoUnderline}></div>
        </li>
        <li className={styles.infoItem}>
          <div className={styles.infoTitle}>
            Government ID <button className={styles.editButton}>Add</button>
          </div>
          <div className={styles.infoValue}>Not Provided</div>
          <div className={styles.infoUnderline}></div>
        </li>
        <li className={styles.infoItem}>
          <div className={styles.infoTitle}>
            Address <button className={styles.editButton}>Edit</button>
          </div>
          <div className={styles.infoValue}>Not Provided</div>
          <div className={styles.infoUnderline}></div>
        </li>
      </ul>
    </div>

    </main>
  );
}
