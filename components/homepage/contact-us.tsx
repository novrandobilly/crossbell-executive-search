import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';
import Phone from '../../assets/homepage/contact-us/phone.svg';
import Mail from '../../assets/homepage/contact-us/mail.svg';
import Linkedin from '../../assets/homepage/contact-us/linkedin.svg';
import Backdrop from '../shared/backdrop';
import ContactUsModal from './contact-us-modal';
import styles from './contact-us.module.scss';

const ContactUs = () => {
  const [subject, setSubject] = useState<string>('Request For Proposal');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const payload = {
      subject,
      name,
      email,
      phone,
      message,
    };

    fetch('/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setIsSending(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsSent(true);
      })
      .catch((err) => {
        setIsSending(false);
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Element name='ContactUs'>
        <div className={styles['container']}>
          <h1 className={styles['title']}>Interested to Know Further?</h1>
          <div className={styles['option-buttons']}>
            <button onClick={() => setSubject('Request For Proposal')}>Request For Proposal</button>
            <button onClick={() => setSubject('Request For Discussion')}>Request For Discussion</button>
          </div>
          <form className={styles['contact-us-form']} onSubmit={handleSubmit}>
            <p className={styles['request-type']}>{subject}</p>
            <div className={styles['input-item']}>
              <label htmlFor='name'></label>
              <input type='text' id='name' placeholder='Name*' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles['input-item']}>
              <label htmlFor='email'></label>
              <input
                type='text'
                id='email'
                placeholder='Email*'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles['input-item']}>
              <label htmlFor='phone'></label>
              <input
                type='text'
                id='phone'
                placeholder='Phone/Whatsapp*'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles['input-item']}>
              <label htmlFor='message'></label>
              <textarea
                placeholder='Message*'
                id='message'
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            {isSending ? (
              <p>
                <em>Submitting...</em>
              </p>
            ) : (
              <button className={styles['submit-button']}>Submit</button>
            )}
          </form>

          <h1 className={styles['talk-directly-title']}>Or, talk with us directly!</h1>
          <div className={styles['contact-item']}>
            <Image src={Phone} alt='Phone Number' width={25} height={25} />
            <p>+62 811-855-212</p>
          </div>
          <div className={styles['contact-item']}>
            <Image src={Mail} alt='Email Address' width={25} height={25} />
            <p>john.purba@gmail.com</p>
          </div>
          <div className={styles['contact-item']}>
            <Image src={Linkedin} alt='Linkedin Address' width={25} height={25} />
            <p>linkedin.com/in/crossbell-indonesia</p>
          </div>
        </div>
      </Element>

      {isSent && <Backdrop onCancel={() => setIsSent(false)} />}
      <ContactUsModal onClose={() => setIsSent(false)} isSent={isSent} />
    </Fragment>
  );
};

export default ContactUs;
