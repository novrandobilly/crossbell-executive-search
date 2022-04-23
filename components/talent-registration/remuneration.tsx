import React from 'react';
import { RemunerationInputType } from '../../pages/talent-registration';
import styles from './remuneration.module.scss';

type RemunerationPropTypes = {
  handleNext: () => void;
  handlePrevious: () => void;
  remuneration: RemunerationInputType;
  setRemuneration: React.Dispatch<React.SetStateAction<RemunerationInputType>>;
};

const Remuneration: React.FC<RemunerationPropTypes> = ({
  handleNext,
  handlePrevious,
  remuneration,
  setRemuneration,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRemuneration((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>REMUNERATION</h3>
      <div className={styles['remuneration']}>
        <h3 className={styles['remuneration-title']}>Current Remuneration</h3>
        <div className={styles['input-item']}>
          <label htmlFor='currentSalary'>Current Salary (IDR): </label>
          <input
            type='text'
            id='currentSalary'
            name='currentSalary'
            placeholder=''
            value={remuneration.currentSalary}
            onChange={handleChange}
          />
        </div>
        <div className={styles['tax']}>
          <p>Tax Status</p>
          <div className={styles['tax-options']}>
            <div className={styles['input-item']}>
              <input
                type='radio'
                name='currentTax'
                id='current_before'
                value='before'
                onChange={handleChange}
                checked={remuneration.currentTax === 'before'}
              />
              <label htmlFor='current_before'>Before Tax</label>
            </div>
            <div className={styles['input-item']}>
              <input
                type='radio'
                name='currentTax'
                id='current_after'
                value='after'
                onChange={handleChange}
                checked={remuneration.currentTax === 'after'}
              />
              <label htmlFor='current_after'>After Tax</label>
            </div>
          </div>
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='currentBenefit'>Benefit outside salary: </label>
          <input
            type='text'
            id='currentBenefit'
            name='currentBenefit'
            value={remuneration.currentBenefit}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles['remuneration']}>
        <h3 className={styles['remuneration-title']}>Expected Remuneration</h3>
        <div className={styles['input-item']}>
          <label htmlFor='expectedSalary'>Expected Salary (IDR): </label>
          <input
            type='text'
            id='expectedSalary'
            name='expectedSalary'
            value={remuneration.expectedSalary}
            onChange={handleChange}
          />
        </div>
        <div className={styles['tax']}>
          <p>Tax Status</p>
          <div className={styles['tax-options']}>
            <div className={styles['input-item']}>
              <input
                type='radio'
                name='expectedTax'
                id='expected_before'
                value='before'
                onChange={handleChange}
                checked={remuneration.expectedTax === 'before'}
              />
              <label htmlFor='expected_before'>Before Tax</label>
            </div>
            <div className={styles['input-item']}>
              <input
                type='radio'
                name='expectedTax'
                id='expected_after'
                value='after'
                onChange={handleChange}
                checked={remuneration.expectedTax === 'after'}
              />
              <label htmlFor='expected_after'>After Tax</label>
            </div>
          </div>
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='expectedBenefit'>Benefit outside salary: </label>
          <input
            type='text'
            id='expectedBenefit'
            name='expectedBenefit'
            value={remuneration.expectedBenefit}
            onChange={handleChange}
          />
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
