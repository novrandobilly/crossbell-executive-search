import React from 'react';
import Image from 'next/image';
import ExperiencesImage from '../../assets/homepage/experiences.png';
import styles from './experiences.module.scss';

const Experiences = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>Our Experiences</h1>
      <div className={styles['experiences']}>
        <Image alt='Experiences' src={ExperiencesImage} width={455} height={300} />
        <p className={styles['experiences-text']}>
          Crossbell, as a subsidiary of a Human Resource Development Consultant, has been providing Executive needs for
          clients in various industry sectors for over a decade. We have a strong track record of delivering high
          quality services timely, with competitive price, and guarantee.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
