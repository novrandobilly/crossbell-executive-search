import React from 'react';
import { ReferenceType } from '../../pages/talent-registration';
import styles from './reference.module.scss';

type ReferencePropTypes = {
  handleNext: () => void;
  handlePrevious: () => void;
  reference: ReferenceType;
  setReference: React.Dispatch<React.SetStateAction<ReferenceType>>;
};

const Reference: React.FC<ReferencePropTypes> = ({ handleNext, handlePrevious, reference, setReference }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReference((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles['container']}>
      <h1>REFERENCE</h1>
      <div className={styles['reference']}>
        <h3>Reference 1</h3>
        <div className={styles['input-item']}>
          <label htmlFor='referenceName_1'>Name</label>
          <input
            type='text'
            id='referenceName_1'
            name='referenceName_1'
            value={reference.referenceName_1}
            onChange={handleChange}
          />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='phone_1'>Phone</label>
          <input
            type='text'
            id='phone_1'
            name='referencePhone_1'
            value={reference.referencePhone_1}
            onChange={handleChange}
          />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='relation_1'>Relation</label>
          <input
            type='text'
            id='relation_1'
            name='referenceRelation_1'
            value={reference.referenceRelation_1}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles['reference']}>
        <h3>Reference 2</h3>
        <div className={styles['input-item']}>
          <label htmlFor='name_2'>Name</label>
          <input
            type='text'
            id='name_2'
            name='referenceName_2'
            value={reference.referenceName_2}
            onChange={handleChange}
          />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='phone_2'>Phone</label>
          <input
            type='text'
            id='phone_2'
            name='referencePhone_2'
            value={reference.referencePhone_2}
            onChange={handleChange}
          />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='relation_2'>Relation</label>
          <input
            type='text'
            id='relation_2'
            name='referenceRelation_2'
            value={reference.referenceRelation_2}
            onChange={handleChange}
          />
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
