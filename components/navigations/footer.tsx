import React from 'react';
import Image from 'next/image';
import LogoVert from '../../assets/Logo-vert.png';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['footer']}>
        <div className={styles['footer-logo']}>
          <Image alt='Crossbell Logo' src={LogoVert} layout='fill' objectFit='contain' priority={false} />
        </div>
        <div className={styles['office-address']}>
          <p>Taman Laguna</p>
          <p>Blok K</p>
          <p>Jati Sampurna, Bekasi</p>
          <p>17435</p>
        </div>
      </div>
      <p className={styles['copyrights']}>© 2022 PT Lonceng Temu Cipta Karya. All Right Reserved.</p>
    </div>
  );
};

export default Footer;
