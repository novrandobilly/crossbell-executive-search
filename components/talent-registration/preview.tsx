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
  achievement: string;
  remuneration: RemunerationInputType;
  reference: ReferenceType;
  handlePrevious: () => void;
  handleSubmit: React.FormEventHandler;
  setShowSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

const Preview: React.FC<PreviewPropTypes> = ({
  identity,
  education,
  certification,
  competence,
  remuneration,
  reference,
  achievement,
  handlePrevious,
  handleSubmit,
  setShowSubmit,
}) => {
  return (
    <div className={styles['container']}>
      <h1>PREVIEW DATA</h1>
      <p>Please read carefully before submit your data.</p>
      <div className={styles['identity']}>
        <h2 className={styles['data-title']}>I. Identity</h2>
        <div className={styles['data-item']}>
          <label htmlFor='name'>Name: &nbsp;</label>
          <span id='name'>{identity.name}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='email'>Email: &nbsp;</label>
          <span id='email'>{identity.email}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='phone'>Phone: &nbsp;</label>
          <span id='phone'>{identity.phone}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='gender'>Gender: &nbsp;</label>
          <span id='gender'>{identity.gender}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='dateOfBirth'>Date Of Birth: &nbsp;</label>
          <span id='dateOfBirth'>{identity.dateOfBirth}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='placeOfBirth'>Place Of Birth: &nbsp;</label>
          <span id='placeOfBirth'>{identity.placeOfBirth}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='religion'>Religion: &nbsp;</label>
          <span id='religion'>{identity.religion}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='maritalStatus'>Marital Status: &nbsp;</label>
          <span id='maritalStatus'>{identity.maritalStatus}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='address'>Address: &nbsp;</label>
          <span id='address'>{identity.address}</span>
        </div>
      </div>

      <div className={styles['education']}>
        <h2 className={styles['data-title']}>II. Education</h2>
        {education.map((item, index) => (
          <div className={styles['data-cluster']} key={index}>
            <h4 className={styles['education-sub-title']}>Education {index + 1}: </h4>
            <div className={styles['data-item']}>
              <label htmlFor='educationLevel'>Education Level: &nbsp;</label>
              <span id='educationLevel' className={styles['educationLevel']}>
                {item.educationLevel}
              </span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='university'>University/School: &nbsp;</label>
              <span id='university'>{item.university}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='major'>Major: &nbsp;</label>
              <span id='major'>{item.major}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='graduationYear'>Graduation Year: &nbsp;</label>
              <span id='graduationYear'>{item.graduationYear}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles['certification']}>
        <h2 className={styles['data-title']}>III. Certification</h2>
        {certification.map((item, index) => (
          <div className={styles['data-cluster']} key={index}>
            <h4 className={styles['certification-sub-title']}>Certification {index + 1}: </h4>
            <div className={styles['data-item']}>
              <label htmlFor='certificationTitle'>Certification Title: &nbsp;</label>
              <span id='certificationTitle'>{item.certificationTitle}</span>
            </div>
            <div className={styles['data-item']}>
              <label htmlFor='institution'>Certification Institution: &nbsp;</label>
              <span id='institution'>{item.institution}</span>
            </div>
            {!item.validForever && (
              <div className={styles['data-item']}>
                <label htmlFor='expirationDate'>Expiration Date: &nbsp;</label>
                <span id='expirationDate'>{item.expirationDate}</span>
              </div>
            )}
            {item.validForever && (
              <div className={styles['data-item']}>
                <label htmlFor='validForever'>Valid Forever: &nbsp;</label>
                <span id='validForever'>Yes</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles['competence-achievement']}>
        <div className={styles['competence']}>
          <h2 className={styles['data-title']}>IV. Competence</h2>
          <ul className={styles['competence-list']}>
            {competence.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles['achievement']}>
          <h2 className={styles['data-title']}>V. Achievement</h2>
          <p>{achievement}</p>
        </div>
      </div>

      <div className={styles['remuneration']}>
        <h2 className={styles['data-title']}>VI. Remuneration</h2>
        <div className={styles['data-item']}>
          <label htmlFor='currentSalary'>Current Salary: &nbsp;</label>
          <span id='currentSalary'>{remuneration.currentSalary}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='currentTax'>Current Tax: &nbsp;</label>
          <span id='currentTax'>{remuneration.currentTax}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='currentBenefit'>Current Benefit: &nbsp;</label>
          <span id='currentBenefit'>{remuneration.currentBenefit}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='expectedSalary'>Expected Salary: &nbsp;</label>
          <span id='expectedSalary'>{remuneration.expectedSalary}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='expectedTax'>Expected Tax: &nbsp;</label>
          <span id='expectedTax'>{remuneration.expectedTax}</span>
        </div>
        <div className={styles['data-item']}>
          <label htmlFor='expectedBenefit'>Expected Benefit: &nbsp;</label>
          <span id='expectedBenefit'>{remuneration.expectedBenefit}</span>
        </div>
      </div>

      <div className={styles['reference']}>
        <h2 className={styles['data-title']}>VII. Reference</h2>
        <div className={styles['data-cluster']}>
          <h4>Reference 1</h4>
          <div className={styles['data-item']}>
            <label htmlFor='referenceName_1'>Name: &nbsp;</label>
            <span id='referenceName_1'>{reference.referenceName_1}</span>
          </div>
          <div className={styles['data-item']}>
            <label htmlFor='referencePhone_1'>Phone: &nbsp;</label>
            <span id='referencePhone_1'>{reference.referencePhone_1}</span>
          </div>
          <div className={styles['data-item']}>
            <label htmlFor='referenceRelation_1'>Relation: &nbsp;</label>
            <span id='referenceRelation_1'>{reference.referenceRelation_1}</span>
          </div>
        </div>
        <div className={styles['data-cluster']}>
          <h4>Reference 2</h4>

          <div className={styles['data-item']}>
            <label htmlFor='referenceName_2'>Name: &nbsp;</label>
            <span id='referenceName_2'>{reference.referenceName_2}</span>
          </div>
          <div className={styles['data-item']}>
            <label htmlFor='referencePhone_2'>Phone: &nbsp;</label>
            <span id='referencePhone_2'>{reference.referencePhone_2}</span>
          </div>
          <div className={styles['data-item']}>
            <label htmlFor='referenceRelation_2'>Relation: &nbsp;</label>
            <span id='referenceRelation_2'>{reference.referenceRelation_2}</span>
          </div>
        </div>
      </div>
      <div className={styles['buttons-group']}>
        <button className={styles['back-button']} onClick={handlePrevious}>
          Back
        </button>
        <button type='button' className={styles['submit-button']} onClick={() => setShowSubmit(true)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Preview;
