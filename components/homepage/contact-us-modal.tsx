import React from 'react';
import Image from 'next/image';
import Checked from '../../assets/Checked.png';
import styled from 'styled-components';
import styles from './contact-us-modal.module.scss';

const SuccessModal = styled.div<{ isSent: boolean }>`
  position: fixed;
  top: -300px;
  left: 50%;
  transform: translate(-50%, ${(props) => (props.isSent ? '500px' : '-300px')});
  background-color: #ffeedd;
  transition: transform 0.5s ease-in-out;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  & > * {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    transform: translate(-50%, ${(props) => (props.isSent ? '450px' : '-300px')});
    width: 100%;
    max-width: 320px;
  }
`;

type ContactUsModalType = {
  onClose: () => void;
  isSent: boolean;
};

const ContactUsModal: React.FC<ContactUsModalType> = ({ onClose, isSent }) => {
  return (
    <SuccessModal isSent={isSent}>
      <h2 className={styles['title']}>Your message submitted successfully!</h2>
      <Image alt='checked' src={Checked} width={75} height={75} />
      <p>Our team will contact you shortly.</p>
      <button className={styles['close-button']} onClick={onClose}>
        Close
      </button>
    </SuccessModal>
  );
};

export default ContactUsModal;
