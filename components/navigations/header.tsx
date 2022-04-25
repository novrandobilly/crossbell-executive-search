import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '../../assets/Logo.png';
import styles from './header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={styles['container']}>
      <Link passHref href='/'>
        <span>
          <Image className={styles['logo']} alt='Crossbell Logo' src={Logo} width={200} height={42.25} />
        </span>
      </Link>

      <ul className={styles['navigations']}>
        <li>Request For Proposal</li>
      </ul>
    </div>
  );
};

export default Header;
