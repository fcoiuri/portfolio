import React from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const { t } = useTranslation();
  const [showCaptcha, setShowCaptcha] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState({
    title: '',
    paragraph: ''
  });
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const submitFormAndShowCaptcha = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue: any) => {
    if (values.name === '' || values.email === '' || values.message === '') {
      setShowError(true);
      return;
    }

    const params = {
      ...values,
      'g-recaptcha-response': captchaValue
    };

    setFormSubmitted({ title: 'Enviando mensagem..', paragraph: '' });
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        params,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: 'A mensagem foi enviada',
              paragraph: 'Iuri vai entrar em contato com você logo.'
            });
          } else {
            setFormSubmitted({
              title: 'Houve um erro inesperado, tente novamente mais tarde.',
              paragraph: 'Por favor, contate Iuri por telefone ou e-mail.'
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title:
              'Houve um erro no envio da mensagem, tente novamente mais tarde.',
            paragraph: 'Por favor, contate Iuri por telefone ou e-mail.'
          });
        }
      );
  };

  return (
    <section id="contact" className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24 relative z-10">
      <div className="neo-box bg-brand-cyan p-8 md:p-16 text-center shadow-[12px_12px_0px_#1A1A1A]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
          {t('contact.title')}
        </h2>
        <p className="text-lg md:text-xl font-medium text-brand-black mb-12 opacity-90 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-6 flex-wrap">
          <a
            href="mailto:fcoiuri@gmail.com"
            className="flex items-center justify-center gap-3 bg-brand-yellow neo-btn w-full md:w-auto md:min-w-[200px] py-4 text-lg hover:scale-[1.02]"
          >
            <AiOutlineMail size={24} />
            Email
          </a>
          <a
            href="https://github.com/fcoiuri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brand-pink neo-btn w-full md:w-auto md:min-w-[200px] py-4 text-lg hover:scale-[1.02]"
          >
            <FaGithub size={24} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/fcoiuri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brand-purple neo-btn w-full md:w-auto md:min-w-[200px] py-4 text-lg hover:scale-[1.02]"
          >
            <FaLinkedinIn size={24} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-16 md:mt-24">
        <Link href="/">
          <div className="neo-btn bg-brand-white p-4 flex justify-center items-center hover:scale-110 cursor-pointer">
            <HiOutlineChevronDoubleUp className="text-brand-black" size={30} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
