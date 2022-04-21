import React, { useState } from 'react';

import styles from './certification.module.scss';

type CertificationInputType = {
  certificationTitle: string;
  institution: string;
  expirationDate: string;
  validForever: boolean;
};

type CertificationProps = {
  handleNext: () => void;
};
const Certification: React.FC<CertificationProps> = ({ handleNext }) => {
  const [certificationNumber, setCertificationNumber] = useState<number>(1);
  const [certification, setCertification] = useState<Array<CertificationInputType>>([]);

  console.log(certification);
  const handleAddCertification = () => {
    setCertificationNumber((prev) => prev + 1);
  };

  const handleCertificationTitleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCertification = [...certification];
    newCertification[index] = {
      ...newCertification[index],
      certificationTitle: e.target.value,
    };
    setCertification(newCertification);
  };

  const handleInstitutionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCertification = [...certification];
    newCertification[index] = {
      ...newCertification[index],
      institution: e.target.value,
    };
    setCertification(newCertification);
  };
  const handleExpiredDateChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCertification = [...certification];
    newCertification[index] = {
      ...newCertification[index],
      expirationDate: e.target.value,
    };
    setCertification(newCertification);
  };

  const handleValidForever = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCertification = [...certification];
    newCertification[index] = {
      ...newCertification[index],
      validForever: e.target.checked,
    };
    setCertification(newCertification);
  };

  let certificationList = [];

  for (let i = 0; i < certificationNumber; i++) {
    certificationList.push(
      <div className={styles['certification-list-item']} key={i}>
        <h4>Certification {i + 1}</h4>
        <div className={styles['input-item']}>
          <label htmlFor={`certificationTitle_${i}`}>Title </label>
          <input
            type='text'
            id={`certificationTitle_${i}`}
            onChange={(event) => handleCertificationTitleChange(event, i)}
          />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor={`institution_${i}`}>Institution </label>
          <input type='text' id={`institution_${i}`} onChange={(event) => handleInstitutionChange(event, i)} />
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
      <button onClick={handleNext} type='button' className={styles['next-button']}>
        Next
      </button>
    </section>
  );
};

export default Certification;
