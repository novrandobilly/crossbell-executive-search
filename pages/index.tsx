import type { NextPage } from 'next';
import Head from 'next/head';
import Welcome from '../components/homepage/welcome';
import VisionMission from '../components/homepage/vision-mission';
import WhatWeProvide from '../components/homepage/what-we-provide';
import Experiences from '../components/homepage/experiences';
import ContactUs from '../components/homepage/contact-us';
import Talent from '../components/homepage/talent-section';
import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crossbell Executive Search</title>
        <meta name='description' content='Crossbell Executive Search' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles['container']}>
        <Welcome />
        <VisionMission />
        <WhatWeProvide />
        <Experiences />
        <ContactUs />
        <Talent />
      </main>
    </div>
  );
};

export default Home;
