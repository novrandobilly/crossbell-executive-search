import React, { useState } from 'react';
import { CertificationInputType } from '../../pages/talent-registration';

import styles from './certification.module.scss';

type CertificationPropTypes = {
  handleNext: () => void;
  handlePrevious: () => void;
  setCertification: React.Dispatch<React.SetStateAction<Array<CertificationInputType>>>;
  certification: Array<CertificationInputType>;
  setCertificationCount: React.Dispatch<React.SetStateAction<number>>;
  certificationCount: number;
};
const Certification: React.FC<CertificationPropTypes> = ({
  handleNext,
  handlePrevious,
  certification,
  setCertification,
  certificationCount,
  setCertificationCount,
}) => {
  const handleAddCertification = () => {
    setCertificationCount((prev) => prev + 1);
  };

  const handleCertificationTitleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCertification((prev) => {
      const newCertification = [...prev];
      newCertification[index] = {
        ...newCertification[index],
        certificationTitle: e.target.value,
      };
      return newCertification;
    });
  };

  const handleInstitutionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCertification((prev) => {
      const newCertification = [...prev];
      newCertification[index] = {
        ...newCertification[index],
        institution: e.target.value,
      };
      return newCertification;
    });
  };

  const handleExpiredDateChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCertification((prev) => {
      const newCertification = [...prev];
      newCertification[index] = {
        ...newCertification[index],
        expirationDate: e.target.value,
      };
      return newCertification;
    });
  };

  const handleValidForever = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCertification((prev) => {
      const newCertification = [...prev];
      newCertification[index] = {
        ...newCertification[index],
        validForever: e.target.checked,
      };
      return newCertification;
    });
  };

  let certificationList = [];

  for (let i = 0; i < certificationCount; i++) {
    certificationList.push(
      <div className={styles['certification-list-item']} key={i}>
        <h4>Certification {i + 1}</h4>
        <div className={styles['input-item']}>
          <label htmlFor={`certificationTitle_${i}`}>Title </label>
          <input
            type='text'
            id={`certificationTitle_${i}`}
            onChange={(event) => handleCertificationTitleChange(event, i)}
            value={certification[i]?.certificationTitle || ''}
          />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor={`institution_${i}`}>Institution </label>
          <input
            type='text'
            id={`institution_${i}`}
            onChange={(event) => handleInstitutionChange(event, i)}
            value={certification[i]?.institution || ''}
          />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor={`expirationDate_${i}`}>Expiration Date</label>
          <input
            type='date'
            id={`expirationDate_${i}`}
            onChange={(event) => handleExpiredDateChange(event, i)}
            disabled={certification[i]?.validForever ? true : false}
          />
          <div className={styles['valid-forever']}>
            <input
              type='checkbox'
              id={`validForever_${i}`}
              value={i}
              onChange={(event) => handleValidForever(event, i)}
            />
            <label htmlFor={`validForever_${i}`}>Valid Forever</label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={styles['container']}>
      <h3>CERTIFICATION</h3>
      <div className={styles['certification']}>{certificationList}</div>
      <button type='button' className={styles['add-button']} onClick={handleAddCertification}>
        + Add Certification
      </button>
      <div className={styles['navigation-buttons']}>
        <button onClick={handlePrevious} type='button' className={styles['previous-button']}>
          Previous
        </button>
        <button onClick={handleNext} type='button' className={styles['next-button']}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Certification;
