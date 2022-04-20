import React from 'react';
import Image from 'next/image';
import Phone from '../../assets/homepage/contact-us/phone.svg';
import Mail from '../../assets/homepage/contact-us/mail.svg';
import Linkedin from '../../assets/homepage/contact-us/linkedin.svg';
import styles from './contact-us.module.scss';

const ContactUs = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>Interested to Know Further?</h1>
      <div className={styles['option-buttons']}>
        <button>Request For Proposal</button>
        <button>Request For Discussion</button>
      </div>
      <form className={styles['contact-us-form']}>
        <p className={styles['request-type']}>Request For Proposal</p>
        <div className={styles['input-item']}>
          <label htmlFor='name'></label>
          <input type='text' id='name' placeholder='Name*' />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='email'></label>
          <input type='text' id='email' placeholder='Email*' />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='phone'></label>
          <input type='text' id='phone' placeholder='Phone/Whatsapp*' />
        </div>
        <div className={styles['input-item']}>
          <label htmlFor='message'></label>
          <textarea placeholder='Message*' id='message' rows={10}></textarea>
        </div>
        <button className={styles['submit-button']}>Submit</button>
      </form>

      <h1>Or, talk with us directly!</h1>
      <div className={styles['contact-item']}>
        <Image src={Phone} alt='Phone Number' width={25} height={25} />
        <p>+62 821 3000 6695</p>
      </div>
      <div className={styles['contact-item']}>
        <Image src={Mail} alt='Email Address' width={25} height={25} />
        <p>admin@crossbell.com</p>
      </div>
      <div className={styles['contact-item']}>
        <Image src={Linkedin} alt='Linkedin Address' width={25} height={25} />
        <p>linkedin.com/in/crossbell-indonesia</p>
      </div>
    </div>
  );
};

export default ContactUs;
