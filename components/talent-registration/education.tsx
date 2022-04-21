import React, { useState } from 'react';
import styles from './education.module.scss';

type EducationInputType = {
  educationLevel: string;
  university: string;
  major: string;
  graduationYear: string;
};

type EducationProps = {
  handleNext: () => void;
};

const Education: React.FC<EducationProps> = ({ handleNext }) => {
  const [educationNumber, setEducationNumber] = useState<number>(1);
  const [education, setEducation] = useState<Array<EducationInputType>>([]);

  const handleAddEducation = () => {
    setEducationNumber((prev) => prev + 1);
  };

  const handleEducationLevelChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      educationLevel: e.target.value,
    };
    setEducation(newEducation);
  };

  const handleUniversityChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      university: e.target.value,
    };
    setEducation(newEducation);
  };

  const handleMajorChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      major: e.target.value,
    };
    setEducation(newEducation);
  };

  const handleGraduationYearChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      graduationYear: e.target.value,
    };
    setEducation(newEducation);
  };

  let educationList = [];

  for (let i = 0; i < educationNumber; i++) {
    educationList.push(
      <div className={styles['education-list-item']} key={i}>
        <h4>Education {i + 1}</h4>
        <div className={styles['input-item']}>
          <label htmlFor={`educationLevel_${i}`}>Education Level </label>
          <select
            name={`educationLevel_${i}`}
            id={`educationLevel_${i}`}
            onChange={(event) => handleEducationLevelChange(event, i)}>
            <option value=''></option>
            <option value='bachelor'>Bachelor &#40;S1&#41;</option>
            <option value='master'>Master &#40;S2&#41;</option>
            <option value='doctor'>Doctor &#40;S3&#41;</option>
          </select>
        </div>
        <div className={styles['input-item']}>
          <label htmlFor={`university_${i}`}>University </label>
          <input type='text' id={`university_${i}`} onChange={(event) => handleUniversityChange(event, i)} />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor={`major_${i}`}>Major </label>
          <input type='text' id={`major_${i}`} onChange={(event) => handleMajorChange(event, i)} />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor={`graduationYear_${i}`}>Graduation Year </label>
          <input
            type='number'
            id={`graduationYear_${i}`}
            min='1900'
            max='2099'
            onChange={(event) => handleGraduationYearChange(event, i)}
          />
        </div>
      </div>
    );
  }

  return (
    <section className={styles['container']}>
      <h3>EDUCATION</h3>
      <div className={styles['education']}>{educationList}</div>
      <button type='button' onClick={handleAddEducation} className={styles['add-button']}>
        + Add Education
      </button>
      <button onClick={handleNext} type='button' className={styles['next-button']}>
        Next
      </button>
    </section>
  );
};

export default Education;
