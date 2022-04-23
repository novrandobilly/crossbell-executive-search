import React from 'react';
import styles from './preview.module.scss';

import {
  IdentityType,
  EducationInputType,
  CertificationInputType,
  RemunerationInputType,
  ReferenceType,
} from '../../pages/talent-registration';

type PreviewPropTypes = {
  identity: IdentityType;
  education: Array<EducationInputType>;
  certification: Array<CertificationInputType>;
  competence: Array<string>;
  remuneration: RemunerationInputType;
  reference: ReferenceType;
};

const Preview: React.FC<PreviewPropTypes> = ({
  identity,
  education,
  certification,
  competence,
  remuneration,
  reference,
}) => {
  return (
    <div className={styles['container']}>
      <h1>PREVIEW</h1>
      <p>Please read carefully before submit your data.</p>
      <div className={styles['identity']}>
        <h3>Identity</h3>
        <div className={styles['data-item']}>
          <label htmlFor='name'>Name: </label>
          <span id='name'>{identity.name}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='email'>Email: </label>
          <span id='email'>{identity.email}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='phone'>Phone: </label>
          <span id='phone'>{identity.phone}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='gender'>Gender: </label>
          <span id='gender'>{identity.gender}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='dateOfBirth'>Date Of Birth: </label>
          <span id='dateOfBirth'>{identity.dateOfBirth}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='placeOfBirth'>Place Of Birth: </label>
          <span id='placeOfBirth'>{identity.placeOfBirth}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='religion'>Religion: </label>
          <span id='religion'>{identity.religion}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='maritalStatus'>Marital Status: </label>
          <span id='maritalStatus'>{identity.maritalStatus}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='address'>Address: </label>
          <span id='address'>{identity.address}</span>
        </div>
      </div>

      <div className={styles['education']}>
        <h3>Education</h3>
        {education.map((item, index) => (
          <div className={styles['data-cluster']} key={index}>
            <h4 className={styles['education-sub-title']}>Education {index + 1}: </h4>
            <div className={styles['data-item']}>
              <label htmlFor='educationLevel'>Education Level: </label>
              <span id='educationLevel'>{item.educationLevel}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='university'>University/School: </label>
              <span id='university'>{item.university}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='major'>Major: </label>
              <span id='major'>{item.major}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='graduationYear'>Graduation Year: </label>
              <span id='graduationYear'>{item.graduationYear}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['certification']}>
        <h3>Certification</h3>
        {certification.map((item, index) => (
          <div className={styles['data-cluster']} key={index}>
            <h4 className={styles['certification-sub-title']}>Certification {index + 1}: </h4>
            <div className={styles['data-item']}>
              <label htmlFor='certificationTitle'>Certification Title: </label>
              <span id='certificationTitle'>{item.certificationTitle}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='institution'>Certification Institution: </label>
              <span id='institution'>{item.institution}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='expirationDate'>Expiration Date: </label>
              <span id='expirationDate'>{item.expirationDate}</span>
            </div>

            <div className={styles['data-item']}>
              <label htmlFor='expirationDate'>Expiration Date: </label>
              <span id='expirationDate'>{item.expirationDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
