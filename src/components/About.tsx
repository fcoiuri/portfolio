import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import meImg from '../../public/assets/me.png';

const About = () => {
  return (
    <div
      id='about'
      data-aos='fade-up'
      data-aos-duration='1500'
      className='w-full p-2 py-24 flex items-center min-h-screen relative z-10'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 glass-panel p-8 md:p-12'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-brand-light font-semibold mb-2'>
            Sobre Mim
          </p>
          <h2 className='py-2 pb-6'>Quem sou eu</h2>
          <p className='py-2 text-gray-300 md:text-lg'>
            Como desenvolvedor, meu objetivo é utilizar minhas habilidades no moderno
            ecossistema React, Next.js, e TypeScript,
            para criar aplicativos da web e mobile responsivos e de alta qualidade que
            melhorem a experiência do usuário e impulsionem o crescimento dos
            negócios.
          </p>
          <p className='py-2 text-gray-300 md:text-lg'>
            Me esforço para me manter atualizado com as tecnologias mais
            recentes e as melhores práticas arquiteturais, além de colaborar
            com equipes multifuncionais para oferecer soluções robustas.
          </p>
          <p className='py-2 text-gray-300 md:text-lg'>
            Possuo experiência corporativa com React, React Native, TypeScript, Tailwind CSS,
            e todo o ecossistema de bibliotecas front-end.
          </p>
          <Link href='/#experience'>
            <p className='py-4 text-brand-light underline cursor-pointer hover:text-brand-dark transition-colors inline-block font-medium'>
              Confira minhas experiências.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto rounded-2xl flex items-center justify-center p-2 mt-8 md:mt-0 glass-panel hover:scale-105 transition-all duration-500 overflow-hidden'>
          <Image className='rounded-xl object-cover' src={meImg} alt='Iuri Mendes' />
        </div>
      </div>
    </div>
  );
};

export default About;
