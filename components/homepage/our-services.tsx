import React from 'react';
import Image from 'next/image';
import Silhouette from '../../assets/homepage/Silhouette.png';
import MultiDisciplines from '../../assets/homepage/our-services/MultiDisciplines.png';
import Price from '../../assets/homepage/our-services/Price.png';
import Quality from '../../assets/homepage/our-services/Quality.png';
import Guarantee from '../../assets/homepage/our-services/Guarantee.png';
import styles from './our-services.module.scss';

const OurServices = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>Our Services</h1>
      {/* <Image
        alt='Our Services'
        src={Silhouette}
        width={650}
        height={270}
      /> */}
      <div className={styles['services']}>
        <div className={styles['service']}>
          <Image alt='MULTI-DISCIPLINES' src={MultiDisciplines} width={100} height={100} />
          <h2>MULTI-DISCIPLINES</h2>
          <p>
            Providing multi-disciplines candidates, we prepared custom tailored solution to meet your company
            requirements.
          </p>
        </div>
        <div className={styles['service']}>
          <Image alt='COMPETITIVE PRICE' src={Price} width={100} height={100} />
          <h2>COMPETITIVE PRICE</h2>
          <p>
            We offer interesting price on helping your company fulfilling human resource needs for critical and
            important role.
          </p>
        </div>
      </div>
      <div className={styles['services']}>
        <div className={styles['service']}>
          <Image alt='HIGH QUALITY' src={Quality} width={141} height={100} />
          <h2>HIGH QUALITY</h2>
          <p>We select and filter our talents carefully to deliver only the best of the best for your company.</p>
        </div>
        <div className={styles['service']}>
          <Image alt='GUARANTEE' src={Guarantee} width={83} height={100} />
          <h2>GUARANTEE</h2>
          <p>
            No worries on holding probation time, we provide replacement if you don’t really click with them. Free of
            charge!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
