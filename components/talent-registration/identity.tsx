import React, { useRef } from 'react';
import { IdentityType } from '../../pages/talent-registration';
import styles from './identity.module.scss';

type IdentityPropTypes = {
  handleNext: () => void;
  setIdentity: React.Dispatch<React.SetStateAction<IdentityType>>;
  identity: IdentityType;
};

const Identity: React.FC<IdentityPropTypes> = ({ handleNext, setIdentity, identity }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, inputKey: string) => {
    const { value } = e.target;
    setIdentity((prev) => ({ ...prev, [inputKey]: value }));
  };
  const handleSelectInput = (e: React.ChangeEvent<HTMLSelectElement>, inputKey: string) => {
    const { value } = e.target;
    setIdentity((prev) => ({ ...prev, [inputKey]: value }));
  };
  return (
    <section className={styles['container']}>
      <h3>IDENTITY</h3>
      <div className={styles['input-item']}>
        <label htmlFor='name'>Name </label>
        <input type='text' id='name' onChange={(e) => handleInput(e, 'name')} value={identity.name} />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='email'>Email </label>
        <input type='text' id='email' onChange={(e) => handleInput(e, 'email')} value={identity.email} />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='phone'>Phone </label>
        <input type='text' id='phone' onChange={(e) => handleInput(e, 'phone')} value={identity.phone} />
      </div>
      <div className={styles['input-item']}>
        <label className={styles['gender-title']}>Gender </label>
        <div className={styles['gender-options']}>
          <div className={styles['gender']}>
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              onChange={(e) => handleInput(e, 'gender')}
              checked={identity.gender === 'male' ? true : false}
            />
            <label htmlFor='male'>Male</label>
          </div>
          <div className={styles['gender']}>
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              onChange={(e) => handleInput(e, 'gender')}
              checked={identity.gender === 'female' ? true : false}
            />
            <label htmlFor='female'>Female</label>
          </div>
        </div>
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='dateOfBirth'>Date of Birth </label>
        <input
          className={styles['date-input']}
          type='date'
          id='dateOfBirth'
          onChange={(e) => handleInput(e, 'dateOfBirth')}
          value={identity.dateOfBirth}
        />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='placeOfBirth'>Place of Birth </label>
        <input
          type='text'
          id='placeOfBirth'
          onChange={(e) => handleInput(e, 'placeOfBirth')}
          value={identity.placeOfBirth}
        />
      </div>
      <div className={styles['input-item']}>
        <label htmlFor='religion'>Religion </label>
        <select
          name='religion'
          id='religion'
          onChange={(e) => handleSelectInput(e, 'religion')}
          value={identity.religion}>
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
        <select
          name='maritalStatus'
          id='maritalStatus'
          onChange={(e) => handleSelectInput(e, 'maritalStatus')}
          value={identity.maritalStatus}>
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
        <input type='text' id='address' onChange={(e) => handleInput(e, 'address')} value={identity.address} />
      </div>

      <button onClick={handleNext} type='button' className={styles['next-button']}>
        Next
      </button>
    </section>
  );
};

export default Identity;
