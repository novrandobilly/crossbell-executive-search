import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Identity from '../components/talent-registration/identity';
import Education from '../components/talent-registration/education';
import Certification from '../components/talent-registration/certification';
import styles from './talent-registration.module.scss';

const TalentRegistration: NextPage = () => {
  const [phase, setPhase] = useState<number>(2);

  const handleNext = () => {
    setPhase((prev) => prev + 1);
  };
  return (
    <div className={styles['container']}>
      <Head>
        <title>Talent Registration</title>
        <meta name='description' content='Crossbell Executive Search - Talent Registration' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Talent Registration</h1>

      <div className={styles['steps']}>
        <p>IDENTITY</p>
        <span></span>
        <p>EDUCATION</p>
        <span></span>
        <p>CERTIFICATION</p>
        <span></span>
        <p>COMPETENCE &amp; ACHIEVEMENT</p>
        <span></span>
        <p>REMUNERATION</p>
        <span></span>
        <p>REFERENCE</p>
      </div>
      <form className={styles['talent-registration-form']}>
        {phase === 0 && <Identity handleNext={handleNext} />}
        {phase === 1 && <Education handleNext={handleNext} />}
        {phase === 2 && <Certification handleNext={handleNext} />}
        {/* 

       

        <div className={styles['remuneration']}>
          <p>Current Remuneration</p>
          <div className={styles['input-item']}>
            <label htmlFor='currentSalary'>Current Salary: </label>
            <input type='text' id='currentSalary' />
          </div>
          <div className={styles['input-item']}>
            <label htmlFor='currentTax'>Current Tax: </label>
            <input type='text' id='currentTax' />
          </div>
          <div className={styles['input-item']}>
            <label htmlFor='currentBenefit'>Current Benefit: </label>
            <input type='text' id='currentBenefit' />
          </div>
          <p>Expected Remuneration</p>
          <div className={styles['input-item']}>
            <label htmlFor='expectedSalary'>Expected Salary: </label>
            <input type='text' id='expectedSalary' />
          </div>
          <div className={styles['input-item']}>
            <label htmlFor='expectedTax'>Expected Tax: </label>
            <input type='text' id='expectedTax' />
          </div>
          <div className={styles['input-item']}>
            <label htmlFor='expectedBenefit'>Expected Benefit: </label>
            <input type='text' id='expectedBenefit' />
          </div>
        </div>

        <div className={styles['reference']}>
          <div className={styles['reference-1']}>
            <p>Referensi 1</p>
            <div className={styles['input-item']}>
              <label htmlFor='reference1Name'>Nama: </label>
              <input type='text' id='reference1Name' />
            </div>
            <div className={styles['input-item']}>
              <label htmlFor='reference1Phone'>Phone: </label>
              <input type='text' id='reference1Phone' />
            </div>
            <div className={styles['input-item']}>
              <label htmlFor='reference1Relation'>Relation: </label>
              <input type='text' id='reference1Relation' />
            </div>
          </div>
          <div className={styles['reference-2']}>
            <p>Referensi 2</p>
            <div className={styles['input-item']}>
              <label htmlFor='reference2Name'>Nama: </label>
              <input type='text' id='reference2Name' />
            </div>
            <div className={styles['input-item']}>
              <label htmlFor='reference2Phone'>Phone: </label>
              <input type='text' id='reference2Phone' />
            </div>
            <div className={styles['input-item']}>
              <label htmlFor='reference2Relation'>Relation: </label>
              <input type='text' id='reference2Relation' />
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default TalentRegistration;
