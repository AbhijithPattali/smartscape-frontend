import React from 'react';
import Navbar from '../../components/Navbar';
import ProfileContent from '../../components/ProfileContent';
import InfoPanel from '../../components/InfoPanel';
import '../styles-as.css'; // Importing global styles under different name

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <ProfileContent />
      <InfoPanel />
    </div>
  );
}