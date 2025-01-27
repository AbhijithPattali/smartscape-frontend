import React from 'react';
import { ChevronRight, Dice1, Gamepad, Monitor, Printer, Video } from 'lucide-react';
import Button from './button'; // Make sure this is the correct path
import styles from './DeviceManagement.module.css'; // Import the CSS module

const DeviceManagement = () => {
  return (
    <div className={styles.deviceManagementContainer}>
      <h1 className={styles.deviceManagementTitle}>Rooms and devices</h1>

      {/* Device Cards */}
      <div className={styles.deviceGrid}>
        {/* Samsung TV 65-inch Card */}
        <div className={`${styles.deviceCard} ${styles.samsungTv}`}>
          <Monitor className={styles.deviceIcon} />
          <h3 className={styles.deviceName}>Samsung TV 65-inch</h3>
          <p className={styles.deviceStatus}>Connected</p>
        </div>

        {/* Backyard CCTV Card */}
        <div className={`${styles.deviceCard} ${styles.backyardCctv}`}>
          <Video className={styles.deviceIcon} />
          <h3 className={styles.deviceName}>Backyard CCTV</h3>
          <p className={styles.deviceStatus}>Connected</p>
          <div className={styles.statusIndicator} />
        </div>

        {/* PS5 Card */}
        <div className={`${styles.deviceCard} ${styles.ps5}`}>
          <Gamepad className={styles.deviceIcon} />
          <h3 className={styles.deviceName}>PS5</h3>
          <p className={styles.deviceStatus}>Idle</p>
          <Button variant="secondary" size="sm" className={styles.connectButton}>
            Connect
          </Button>
        </div>

        {/* HP Smart Printer Card */}
        <div className={`${styles.deviceCard} ${styles.hpPrinter}`}>
          <Printer className={styles.deviceIcon} />
          <h3 className={styles.deviceName}>HP Smart Printer</h3>
          <p className={styles.deviceStatus}>Connected</p>
        </div>
      </div>

      {/* Devices and Rooms Sections */}
      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Devices</h2>
            <div className={styles.buttonGroup}>
              <Button variant="outline" size="sm">Add device</Button>
              <Button variant="outline" size="sm">Remove device</Button>
            </div>
          </div>
          <div className={styles.buttonList}>
            {[
              'Bluetooth configuration',
              'Choose a room',
              'Choose by category',
              'Network settings',
              'Exclude device from shutdown',
              'Manual override',
            ].map(item => (
              <Button key={item} variant="ghost" className={styles.buttonItem}>
                {item}
                <ChevronRight className={styles.chevronIcon} />
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeader}>Rooms</h2>
          <div className={styles.buttonList}>
            {['Hall', 'Dining room', 'Bedroom', 'Store room', 'Study room', 'Backyard', 'Parking lot'].map(room => (
              <Button key={room} variant="ghost" className={styles.buttonItem}>
                {room}
                <ChevronRight className={styles.chevronIcon} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceManagement;
