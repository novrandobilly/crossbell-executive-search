import type { NextPage } from 'next';
import Head from 'next/head';
import Welcome from '../components/homepage/welcome';
import VisionMission from '../components/homepage/vision-mission';
import OurServices from '../components/homepage/our-services';
import Experiences from '../components/homepage/experiences';
import ContactUs from '../components/homepage/contact-us';
import Talent from '../components/homepage/talent-section';
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
        <OurServices />
        <Experiences />
        <ContactUs />
        <Talent />
      </main>
    </div>
  );
};

export default Home;
