import React from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  //   emailjs.send(
  //     process.env.SERVICE_ID,
  //     process.env.TEMPLATE_ID,
  //     // params,
  //     process.env.PUBLIC_KEY,
  //   )
  //     .then(({ status }) => {
  //       if (status === 200) {
  //         // setFormSubmitted({ title: 'Message has been sent', paragraph: 'Mike will be in contact with you soon.' });
  //       } else {
  //         // setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Mike either by phone or email.' });
  //       }
  //     }, (err) => {
  //       // eslint-disable-next-line no-console
  //       console.log(err);
  //       // setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Mike either by phone or email.' });
  //     });
  // };

  return (
    <div className='w-full lg:h-screen'>
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
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={
                    'https://raw.githubusercontent.com/fireclint/portfolio-nextjs/main/public/assets/contact.jpg'
                  }
                  alt='/'
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
                  <div
                    className='rounded-full shadow-lg shadow-[#3f3f3f]
                p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                  >
                    <FaLinkedinIn size={'2em'} />
                  </div>
                  <div
                    className='rounded-full shadow-lg shadow-[#3f3f3f]
                p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                  >
                    <AiOutlineMail size={'2em'} />
                  </div>
                  <div
                    className='rounded-full shadow-lg shadow-[#3f3f3f]
                p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                  >
                    <FaGithub size={'2em'} />
                  </div>
                  <div
                    className='rounded-full shadow-lg shadow-[#3f3f3f]
                p-6 cursor-pointer hover:scale-125 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill size={'2em'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-[#2b2b2b] rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Nome</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-[#040404]'
                    type='text'
                    name='name'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>E-mail</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-[#040404]'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-[#040404]'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 text-[#040404]'
                    rows={10}
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4'>Enviar mensagem</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#d4af37]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
