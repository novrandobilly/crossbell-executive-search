import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '../../assets/Logo.png';
import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles['container']}>
      <Image alt='Crossbell Logo' src={Logo} width={200} height={42.25} />

      <ul className={styles['navigations']}>
        <li>Request For Proposal</li>
      </ul>
    </div>
  );
};

export default Header;
