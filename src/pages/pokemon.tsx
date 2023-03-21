import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pokemonImg from '../../public/assets/projects/pokemon.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import Head from 'next/head';

const pokemon = () => {
  return (
    <div
      className='w-full'
      data-aos='fade-up'
      data-aos-duration='2000'
      data-aos-mirror='true'
    >
      <Head>
        <title>Projeto Pokémon</title>
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          src={pokemonImg}
          alt='Projeto Recognicão Visuográfica de local de crime'
          className='absolute z-1'
          fill
          style={{ objectFit: 'cover' }}
        />
        <div
          className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] 
        translate-x-[-50%] translate-y-[-50%] z-10 p-2'
        >
          <h2 className='py-2'>Pokémon</h2>
          <h3>React | Redux | Material-UI</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Projeto</p>
          <h2 className='py-2'>Visão Geral</h2>
          <p className='py-2'>
            Aplicação construída usando React. O usuário pode visualizar todos
            os Pokémons, foi utilizado a Poké API para obter os dados de todos
            os Pokémons. Para gerenciamento de estado foi utilizado Redux e na
            estilização foi utilizado Material-UI. O deploy da aplicação foi
            feito no Vercel.
          </p>
          <a
            href='https://github.com/fcoiuri/pokemon'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Código</button>
          </a>
          <a
            href='https://pokemon-six-khaki.vercel.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Aplicação</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material-UI
              </p>
              <p className='text-gray-300 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects' className='cursor-pointer flex '>
          <IoIosArrowBack size={30} />
          <h3>Voltar</h3>
        </Link>
      </div>
    </div>
  );
};

export default pokemon;
