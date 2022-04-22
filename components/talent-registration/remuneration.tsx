import React from 'react';
import styles from './remuneration.module.scss';

type RemunerationPropTypes = {
  handleNext: () => void;
  handlePrevious: () => void;
};

const Remuneration: React.FC<RemunerationPropTypes> = ({ handleNext, handlePrevious }) => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>REMUNERATION</h1>
      <div className={styles['remuneration']}>
        <h3 className={styles['remuneration-title']}>Current Remuneration</h3>
        <div className={styles['input-item']}>
          <label htmlFor='current_salary'>Current Salary (IDR): </label>
          <input type='text' id='current_salary' placeholder='' />
        </div>
        <div className={styles['tax']}>
          <p>Tax Status</p>
          <div className={styles['tax-options']}>
            <div className={styles['input-item']}>
              <input type='radio' name='current_tax' id='current_before' />
              <label htmlFor='current_before'>Before Tax</label>
            </div>
            <div className={styles['input-item']}>
              <input type='radio' name='current_tax' id='current_after' />
              <label htmlFor='current_after'>After Tax</label>
            </div>
          </div>
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='current_benefit'>Benefit outside salary: </label>
          <input type='text' id='current_benefit' />
        </div>
      </div>
      <div className={styles['remuneration']}>
        <h3 className={styles['remuneration-title']}>Expected Remuneration</h3>
        <div className={styles['input-item']}>
          <label htmlFor='expected_salary'>Expected Salary (IDR): </label>
          <input type='text' id='expected_salary' />
        </div>
        <div className={styles['tax']}>
          <p>Tax Status</p>
          <div className={styles['tax-options']}>
            <div className={styles['input-item']}>
              <input type='radio' name='expected_tax' id='expected_before' />
              <label htmlFor='expected_before'>Before Tax</label>
            </div>
            <div className={styles['input-item']}>
              <input type='radio' name='expected_tax' id='expected_after' />
              <label htmlFor='expected_after'>After Tax</label>
            </div>
          </div>
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='expected_benefit'>Benefit outside salary: </label>
          <input type='text' id='expected_benefit' />
        </div>
      </div>
      <div className={styles['navigation-buttons']}>
        <button onClick={handlePrevious} type='button' className={styles['previous-button']}>
          Previous
        </button>
        <button onClick={handleNext} type='button' className={styles['next-button']}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Remuneration;
