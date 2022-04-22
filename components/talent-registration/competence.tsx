import React, { useState } from 'react';
import styles from './competence.module.scss';

type CompetencePropTypes = {
  handleNext: () => void;
  handlePrevious: () => void;
  setCompetence: React.Dispatch<React.SetStateAction<Array<string>>>;
  setAchievement: React.Dispatch<React.SetStateAction<string>>;
  achievement: string;
};

const Competence: React.FC<CompetencePropTypes> = ({
  handleNext,
  handlePrevious,
  setCompetence,
  setAchievement,
  achievement,
}) => {
  const [competenceCount, setCompetenceCount] = useState<number>(1);
  let competenceList = [];

  const handleAddCompetence = () => {
    setCompetenceCount((prev) => prev + 1);
  };

  const handleCompetenceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCompetence((prev) => {
      const newCompetence = [...prev];
      newCompetence[index] = e.target.value;
      return newCompetence;
    });
  };

  const handleAchievementChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAchievement(e.target.value);
  };

  for (let i = 0; i < competenceCount; i++) {
    competenceList.push(
      <div className={styles['input-item']} key={i}>
        <label htmlFor={`competence_${i}`}>{i + 1}.</label>
        <input type='text' id={`competence_${i}`} onChange={(event) => handleCompetenceChange(event, i)} />
      </div>
    );
  }
  return (
    <section className={styles['container']}>
      <div className={styles['competence-container']}>
        <h3>COMPETENCE</h3>
        <div className={styles['competence-list-item']}>{competenceList}</div>
        <button type='button' className={styles['add-button']} onClick={handleAddCompetence}>
          + Add Competence
        </button>
      </div>

      <div className={styles['achievement']}>
        <label htmlFor='achievement'>ACHIEVEMENT (Related to Competence)</label>
        <textarea
          name='achievement'
          id='achievement'
          cols={30}
          rows={10}
          onChange={handleAchievementChange}
          value={achievement}></textarea>
      </div>

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

export default Competence;
