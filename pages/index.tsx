import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Welcome from '../components/homepage/welcome';
import VisionMission from '../components/homepage/vision-mission';
import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crossbell</title>
        <meta name='description' content='Crossbell Executive Search' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles['container']}>
        <Welcome />
        <VisionMission />
      </main>
    </div>
  );
};

export default Home;
