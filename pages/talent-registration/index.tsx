import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Head from 'next/head';
import Identity from '../../components/talent-registration/identity';
import Education from '../../components/talent-registration/education';
import Certification from '../../components/talent-registration/certification';
import Competence from '../../components/talent-registration/competence';
import Remuneration from '../../components/talent-registration/remuneration';
import Reference from '../../components/talent-registration/reference';
import Preview from '../../components/talent-registration/preview';
import Backdrop from '../../components/shared/backdrop';
import RegisterModal from '../../components/talent-registration/register-modal';
import styles from './index.module.scss';

export type IdentityType = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  religion: string;
  maritalStatus: string;
  address: string;
};

export type EducationInputType = {
  educationLevel: string;
  university: string;
  major: string;
  graduationYear: string;
};

export type CertificationInputType = {
  certificationTitle: string;
  institution: string;
  expirationDate: string;
  validForever: boolean;
};

export type RemunerationInputType = {
  currentSalary: string;
  currentTax: string;
  currentBenefit: string;
  expectedSalary: string;
  expectedTax: string;
  expectedBenefit: string;
};

export type ReferenceType = {
  referenceName_1: string;
  referencePhone_1: string;
  referenceRelation_1: string;
  referenceName_2: string;
  referencePhone_2: string;
  referenceRelation_2: string;
};

const TalentRegistration: NextPage = () => {
  const router = useRouter();
  const [showSubmit, setShowSubmit] = useState<boolean>(false);
  const [phase, setPhase] = useState<number>(0);
  const [identity, setIdentity] = useState<IdentityType>({
    name: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    placeOfBirth: '',
    religion: '',
    maritalStatus: '',
    address: '',
  });
  const [educationCount, setEducationCount] = useState<number>(1);
  const [education, setEducation] = useState<Array<EducationInputType>>([
    {
      educationLevel: '',
      university: '',
      major: '',
      graduationYear: '',
    },
  ]);
  const [certificationCount, setCertificationCount] = useState<number>(1);
  const [certification, setCertification] = useState<Array<CertificationInputType>>([
    {
      certificationTitle: '',
      institution: '',
      expirationDate: '',
      validForever: false,
    },
  ]);
  const [competenceCount, setCompetenceCount] = useState<number>(1);
  const [competence, setCompetence] = useState<Array<string>>([]);
  const [achievement, setAchievement] = useState<string>('');
  const [remuneration, setRemuneration] = useState<RemunerationInputType>({
    currentSalary: '',
    currentTax: '',
    currentBenefit: '',
    expectedSalary: '',
    expectedTax: '',
    expectedBenefit: '',
  });

  const [reference, setReference] = useState<ReferenceType>({
    referenceName_1: '',
    referencePhone_1: '',
    referenceRelation_1: '',
    referenceName_2: '',
    referencePhone_2: '',
    referenceRelation_2: '',
  });

  const handleNext = () => {
    setPhase((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (phase > 0) setPhase((prev) => prev - 1);
  };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const payload = {
      ...identity,
      education,
      certification,
      competence,
      achievement,
      remuneration,
      reference,
    };
    console.log(payload);
    try {
      const res = await fetch('/api/talent-registration/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setShowSubmit(false);
      router.push('/talent-registration/success');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles['container']}>
      <Head>
        <title>Talent Registration</title>
        <meta name='description' content='Crossbell Executive Search - Talent Registration' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className={styles['title']}>Talent Registration</h1>

      <div className={styles['steps']}>
        <p style={phase >= 0 ? { backgroundColor: '#f79f35', color: '#fff' } : undefined}>IDENTITY</p>
        <span></span>
        <p style={phase >= 1 ? { backgroundColor: '#f79f35', color: '#fff' } : undefined}>EDUCATION</p>
        <span></span>
        <p style={phase >= 2 ? { backgroundColor: '#f79f35', color: '#fff' } : undefined}>CERTIFICATION</p>
        <span></span>
        <p style={phase >= 3 ? { backgroundColor: '#f79f35', color: '#fff' } : undefined}>
          COMPETENCE &amp; ACHIEVEMENT
        </p>
        <span></span>
        <p style={phase >= 4 ? { backgroundColor: '#f79f35', color: '#fff' } : undefined}>REMUNERATION</p>
        <span></span>
        <p style={phase >= 5 ? { backgroundColor: '#f79f35', color: '#fff' } : undefined}>REFERENCE</p>
      </div>
      <form className={styles['talent-registration-form']}>
        {phase === 0 && <Identity handleNext={handleNext} setIdentity={setIdentity} identity={identity} />}
        {phase === 1 && (
          <Education
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            setEducation={setEducation}
            education={education}
            setEducationCount={setEducationCount}
            educationCount={educationCount}
          />
        )}
        {phase === 2 && (
          <Certification
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            setCertification={setCertification}
            certification={certification}
            certificationCount={certificationCount}
            setCertificationCount={setCertificationCount}
          />
        )}
        {phase === 3 && (
          <Competence
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            competenceCount={competenceCount}
            setCompetenceCount={setCompetenceCount}
            competence={competence}
            setCompetence={setCompetence}
            setAchievement={setAchievement}
            achievement={achievement}
          />
        )}
        {phase === 4 && (
          <Remuneration
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            remuneration={remuneration}
            setRemuneration={setRemuneration}
          />
        )}
        {phase === 5 && (
          <Reference
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            reference={reference}
            setReference={setReference}
          />
        )}
        {phase === 6 && (
          <Preview
            handlePrevious={handlePrevious}
            identity={identity}
            education={education}
            certification={certification}
            competence={competence}
            remuneration={remuneration}
            reference={reference}
            achievement={achievement}
            handleSubmit={handleSubmit}
            setShowSubmit={setShowSubmit}
          />
        )}
        {showSubmit && <Backdrop onCancel={() => setShowSubmit(false)} />}
        <RegisterModal showSubmit={showSubmit} setShowSubmit={setShowSubmit} handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default TalentRegistration;
