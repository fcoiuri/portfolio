import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div
      className='w-full h-screen text-center'
      data-aos='fade-up'
      data-aos-duration='2000'
      data-aos-mirror='true'
    >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-300 font-medium'>
            Vamos construir algo juntos
          </p>
          <h1 className='py-4 text-[#F9F6EE]'>
            Olá, eu sou
            <span className='text-[#d4af37]'>&nbsp;Iuri Mendes</span>
          </h1>
          <h1 className='py-1 '>Desenvolvedor Front-End</h1>
          <p className='py-4 text-gray-300 max-w-[70%] m-auto font-medium'>
            Estou focado e me especializando cada dia mais em construir
            aplicações web front-end responsivas.
          </p>
          <div className='flex items-center justify-between max-w-[450px] m-auto py-4'>
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
  );
};

export default Main;
