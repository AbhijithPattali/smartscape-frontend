import React from 'react';
import Navbar from '../../components/Navbar';
import ProfileContent from '../../components/ProfileContent';
import InfoPanel from '../../components/InfoPanel';
import styles from './styles.module.css';
import '../globals.css';

export default function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <ProfileContent />
      <InfoPanel />
    </div>
  );
}