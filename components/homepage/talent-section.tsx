import React from 'react';
import styles from './talent-section.module.scss';

const Talent = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['talent-section']}>
        <h1 className={styles['title']}>Qualified Enough To Be Our Talent?</h1>
        <h1 className={styles['title']}>Apply Now To Join Our Selection Process!</h1>
        <button>Apply As Talent</button>
      </div>
    </div>
  );
};

export default Talent;
