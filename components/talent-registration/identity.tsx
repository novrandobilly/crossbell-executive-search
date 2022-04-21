import React from 'react';
import styles from './identity.module.scss';

type IdentityProps = {
  handleNext: () => void;
};

const Identity: React.FC<IdentityProps> = ({ handleNext }) => {
  return (
    <section className={styles['container']}>
      <h3>IDENTITY</h3>
      <div className={styles['input-item']}>
        <label htmlFor='name'>Name </label>
        <input type='text' id='name' />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='email'>Email </label>
        <input type='text' id='email' />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='phone'>Phone </label>
        <input type='text' id='phone' />
      </div>
      <div className={styles['input-item']}>
        <label className={styles['gender-title']}>Gender </label>
        <div className={styles['gender-options']}>
          <div className={styles['gender']}>
            <input type='radio' id='male' name='gender' value='male' />
            <label htmlFor='male'>Male</label>
          </div>
          <div className={styles['gender']}>
            <input type='radio' id='female' name='gender' value='female' />
            <label htmlFor='female'>Female</label>
          </div>
        </div>
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='dateOfBirth'>Date of Birth </label>
        <input className={styles['date-input']} type='date' id='dateOfBirth' />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='placeOfBirth'>Place of Birth </label>
        <input type='text' id='placeOfBirth' />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='religion'>Religion </label>
        <select name='religion' id='religion'>
          <option value=''></option>
          <option value='muslim'>Muslim</option>
          <option value='protestant'>Protestant</option>
          <option value='catholic'>Catholic</option>
          <option value='hindu'>Hindu</option>
          <option value='buddhist'>Buddhist</option>
          <option value='confucian'>Confucian</option>
        </select>
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='maritalStatus'>Marital Status </label>
        <select name='maritalStatus' id='maritalStatus'>
          <option value=''></option>
          <option value='married'>Married</option>
          <option value='widowed'>Widowed</option>
          <option value='separated'>Separated</option>
          <option value='divorced'>Divorced</option>
          <option value='single'>Single</option>
        </select>
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='address'>Home Address </label>
        <input type='text' id='address' />
      </div>
      <button onClick={handleNext} type='button' className={styles['next-button']}>
        Next
      </button>
    </section>
  );
};

export default Identity;
