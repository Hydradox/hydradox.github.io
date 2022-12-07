import style from './Contact.module.scss'

import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"

import InputField from '../components/ui/InputField/InputField'
import TextArea from '../components/ui/TextArea/TextArea'
import SocialCard from '../components/ui/SocialCard/SocialCard'

function Contact() {
    const { t } = useTranslation('translations', { keyPrefix: 'contact' });
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9w3cq72', 'template_9b3yb7y', form.current, 'jSXgiBDb76refcjxl')
            .then((result) => {
                console.log('SUCCEESSS::', result.text);
            }, (error) => {
                console.log('ERRIRRR::', error.text);
            });
    };

    return (
        <div className={`PageWrapper ${style.ContactPage}`}>
            <Helmet>
                <title>{t('title')} | Portfolio</title>
            </Helmet>

            <section className={`Section ${style.ContactForm}`}>
                <div className={style.FormSideImage}><img src="/jcm-programmer.jpg" alt="Jaime" /></div>

                <form ref={form} className={style.ContactFields} action="" method="post" onSubmit={sendEmail}>
                    <span className={style.FormTitle}>{t('contactForm.contactMe')}</span>

                    <InputField type="text" name="user_name" label={t('contactForm.name')} className={style.FormInput} required={true} />
                    <InputField type="email" name="user_email" label={t('contactForm.email')} className={style.FormInput} required={true} />

                    <TextArea name="message" label={t('contactForm.message')} required={true} />

                    <div className={style.FormValidation}>
                        <button className='btn'>{t('contactForm.send')}</button>
                        <ReCAPTCHA sitekey='6LePFF4jAAAAAJ2MlDhvzzJVzwFQoVytI4b2wjTb' />
                    </div>
                </form>
            </section>

            <section className={`Section ${style.SocialSection}`}>
                <SocialCard />
                <SocialCard />
                <SocialCard />
            </section>
        </div>
    )
}

export default Contact;