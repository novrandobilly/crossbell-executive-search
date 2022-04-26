import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Checked from '../../assets/Checked.png';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styles from './success.module.scss';

const TalentRegistration: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles['container']}>
      <Head>
        <title>Talent Registration</title>
        <meta name='description' content='Crossbell Executive Search - Talent Registration' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles['success-message']}>
        <h1>Congratulations!</h1>
        <h3>Your data has successfully submitted!</h3>
        <Image alt='Checked' src={Checked} width={100} height={100} />
        <p>
          Crossbell Team will proceed your data and contact further if there are any Executive Position matched with
          your profile.
        </p>
        <Link href='/'>Back to homepage</Link>
      </div>
    </div>
  );
};

export default TalentRegistration;
