import React from 'react';
import styles from './register-modal.module.scss';
import styled from 'styled-components';

type RegisterModalType = {
  showSubmit: boolean;
  setShowSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: React.FormEventHandler;
};

const RegisterModalContainer = styled.div<{ showSubmit: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20;
  background-color: #ffeedd;
  transform: translate(-50%, ${(props) => (props.showSubmit ? '-50%' : '-450%')});
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  & > * {
    text-align: center;
  }
`;
const RegisterModal: React.FC<RegisterModalType> = ({ showSubmit, setShowSubmit, handleSubmit }) => {
  return (
    <RegisterModalContainer showSubmit={showSubmit}>
      <h1>Are you sure you want to submit?</h1>
      <div className={styles['buttons-group']}>
        <button onClick={() => setShowSubmit(false)} type='button' className={styles['previous-button']}>
          Cancel
        </button>
        <button className={styles['next-button']} onClick={handleSubmit}>
          Yes
        </button>
      </div>
      <p>Please check carefully before submit your data.</p>
    </RegisterModalContainer>
  );
};

export default RegisterModal;
