import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div
      id='home'
      className='w-full h-screen text-center'
      data-aos='fade-up'
      data-aos-duration='2000'
      data-aos-mirror='true'
    >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-[#F9F6EE]'>
            Olá, sou
            <span className='text-[#d4af37]'>&nbsp;Iuri Mendes</span>
          </h1>
          <h1 className='py-1 '>Desenvolvedor de software</h1>
          <p className='py-4 text-gray-300 max-w-[70%] m-auto font-medium'>
            Estou focado e me especializando cada dia mais em construir
            aplicações integrando tanto o front-end quanto o back-end.
          </p>
          <div className='flex items-center justify-between max-w-[450px] m-auto py-4'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
