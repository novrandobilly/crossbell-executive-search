import React from 'react';
import styles from './welcome.module.scss';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import Background from '../../assets/homepage/background.png';

const Welcome = () => {
  return (
    <div className={styles['container']}>
      <Image
        className={styles['background-image']}
        alt='Background Banner'
        src={Background}
        layout='fill'
        objectFit='cover'
      />
      <div className={styles['text-content']}>
        <p className={styles['subtitle']}>CROSSBELL EXECUTIVE SEARCH</p>
        <div className={styles['main-title-container']}>
          <h1>Where</h1>
          <h1>Quality,</h1>
          <h1>Meets</h1>
          <h1>Quality.</h1>
        </div>
        <div className={styles['cta-rfp']}>
          <p>Does your company need our services?</p>
          <ScrollLink to='ContactUs' smooth={true} duration={800}>
            <button>Request For Proposal</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
