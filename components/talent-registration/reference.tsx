import React from 'react';
import styles from './reference.module.scss';

type ReferencePropTypes = {
  handleNext: () => void;
  handlePrevious: () => void;
};

const Reference: React.FC<ReferencePropTypes> = ({ handleNext, handlePrevious }) => {
  return (
    <div className={styles['container']}>
      <h1>REFERENCE</h1>
      <div className={styles['reference']}>
        <h3>Reference 1</h3>
        <div className={styles['input-item']}>
          <label htmlFor='name_1'>Name</label>
          <input type='text' id='name_1' />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='phone_1'>Phone</label>
          <input type='text' id='phone_1' />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='relation_1'>Relation</label>
          <input type='text' id='relation_1' />
        </div>
      </div>
      <div className={styles['reference']}>
        <h3>Reference 2</h3>
        <div className={styles['input-item']}>
          <label htmlFor='name_2'>Name</label>
          <input type='text' id='name_2' />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='phone_2'>Phone</label>
          <input type='text' id='phone_2' />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='relation_2'>Relation</label>
          <input type='text' id='relation_2' />
        </div>
      </div>
      <div className={styles['navigation-buttons']}>
        <button onClick={handlePrevious} type='button' className={styles['previous-button']}>
          Previous
        </button>
        <button onClick={handleNext} type='button' className={styles['next-button']}>
          Preview
        </button>
      </div>
    </div>
  );
};

export default Reference;
