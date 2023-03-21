import React from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import meImg from '../../public/assets/me2.png';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
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
    <div
      id='contact'
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-mirror='true'
      className='w-full lg:h-screen'
    >
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='uppercase text-xl tracking-widest text-[#d4af37]'>
          Contato
        </p>
        <h2 className='py-2'>Entrar em contato</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div
            className='col-span-3 lg:col-span-2 w-full h-full shadow-xl
           shadow-[#2b2b2b] rounded-xl p-4'
          >
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={meImg}
                  alt='Iuri Mendes'
                />
              </div>
              <div>
                <h2 className='py-2'>Iuri Mendes</h2>
                <p>Desenvolvedor Front-End</p>
              </div>
              <div className='flex items-center justify-center'>
                <p className='uppercase pt-8 font-semibold'>
                  Conecte-se comigo
                </p>
              </div>
              <div>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://linkedin.com/in/fcoiuri/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div
                      className='rounded-full shadow-lg shadow-[#3f3f3f]
                p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                    >
                      <FaLinkedinIn size={'2em'} />
                    </div>
                  </a>
                  <a href='mailto: fcoiuri@gmail.com'>
                    <div
                      className='rounded-full shadow-lg shadow-[#3f3f3f]
                    p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                    >
                      <AiOutlineMail size={'2em'} />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fcoiuri'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div
                      className='rounded-full shadow-lg shadow-[#3f3f3f]
                p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                    >
                      <FaGithub size={'2em'} />
                    </div>
                  </a>
                  <a href='tel:5585985299906'>
                    <div
                      className='rounded-full shadow-lg shadow-[#3f3f3f]
                p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                    >
                      <BsFillTelephoneFill size={'2em'} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-[#2b2b2b] rounded-xl lg:p-4'>
            <div className='p-4'>
              {formSubmitted.title === '' ? (
                <React.Fragment>
                  {!showCaptcha ? (
                    <form onSubmit={submitFormAndShowCaptcha}>
                      <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Nome</label>
                        <input
                          value={values.name}
                          onChange={handleChange}
                          className='border-2 rounded-lg p-3 flex border-gray-300 text-[#040404]'
                          type='text'
                          name='name'
                          required
                        />
                      </div>
                      <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>E-mail</label>
                        <input
                          value={values.email}
                          onChange={handleChange}
                          className='border-2 rounded-lg p-3 flex border-gray-300 text-[#040404]'
                          type='email'
                          name='email'
                          required
                        />
                      </div>
                      <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>
                          Assunto
                        </label>
                        <input
                          value={values.subject}
                          onChange={handleChange}
                          className='border-2 rounded-lg p-3 flex border-gray-300 text-[#040404]'
                          type='text'
                          name='subject'
                          required
                        />
                      </div>
                      <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>
                          Mensagem
                        </label>
                        <textarea
                          onChange={handleChange}
                          value={values.message}
                          className='border-2 rounded-lg p-3 border-gray-300 text-[#040404]'
                          rows={10}
                          name='message'
                          required
                        ></textarea>
                      </div>
                      <button className='w-full p-4 mt-4'>
                        Enviar mensagem
                      </button>
                    </form>
                  ) : (
                    // <div className='flex w-full h-auto items-center justify-center col-span-3'>
                    <div className='flex justify-center '>
                      <ReCAPTCHA
                        sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                        onChange={sendEmail}
                      />
                    </div>
                  )}
                </React.Fragment>
              ) : (
                <div className='flex flex-col items-center'>
                  <h3 className=' text-2xl'>{formSubmitted.title}!</h3>
                  <p className='pt-1'>{formSubmitted.paragraph}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div
              className='rounded-full shadow-lg shadow-gray-500
            p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <HiOutlineChevronDoubleUp className='text-[#d4af37]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
