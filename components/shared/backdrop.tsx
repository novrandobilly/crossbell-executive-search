import React from 'react';
import styles from './backdrop.module.scss';

type BackdropPropType = {
  onCancel: () => void;
};
const Backdrop: React.FC<BackdropPropType> = ({ onCancel }) => {
  return <div onClick={onCancel} className={styles['backdrop']} />;
};

export default Backdrop;
