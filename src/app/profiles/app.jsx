import React from 'react';
import Navbar from '../../components/Navbar';
import ProfileContent from '../../components/ProfileContent';
import InfoPanel from '../../components/InfoPanel';
import '../styles-as.css';

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <ProfileContent />
      <InfoPanel />
    </div>
  );
}