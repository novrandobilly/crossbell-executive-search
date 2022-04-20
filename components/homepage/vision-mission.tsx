import React from 'react';
import Image from 'next/image';
import Vision from '../../assets/homepage/vision-icon.svg';
import Mission from '../../assets/homepage/mission-icon.svg';
import styles from './vision-mission.module.scss';

const VisionMission = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['vision-mission']}>
        <div className={styles['vision']}>
          <Image alt='Vision Icon' src={Vision} width={100} height={100} />
          <h1>Vision</h1>
          <p>To connect high quality talent with high quality career.</p>
        </div>
        <div className={styles['mission']}>
          <Image alt='Mission Icon' src={Mission} width={100} height={100} />
          <h1>Mission</h1>
          <ol>
            <li>Providing a platform to help job seekers find their dream job in a high quality company.</li>
            <li>Providing a job market platform for employers to get suitable candidate profiles.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
