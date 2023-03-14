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
          <p className='uppercase text-sm tracking-widest text-gray-600 font-medium'>
            Vamos construir algo juntos
          </p>
          <h1 className='py-4 text-gray-700'>
            Olá, eu sou
            <span className='text-[#4e4ae3]'>&nbsp;Iuri</span>
          </h1>
          <h1 className='py-1 text-gray-700'>Um desenvolvedor Front-End</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto font-medium'>
            Estou focado e me especializando cada dia mais em construir
            aplicações web front-end responsivas.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div
              className='rounded-full shadow-lg shadow-gray-400 
                p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaLinkedinIn />
            </div>
            <div
              className='rounded-full shadow-lg shadow-gray-400 
                p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <AiOutlineMail />
            </div>
            <div
              className='rounded-full shadow-lg shadow-gray-400 
                p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaGithub />
            </div>
            <div
              className='rounded-full shadow-lg shadow-gray-400 
                p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
