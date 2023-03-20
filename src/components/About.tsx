import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import meImg from '../../public/assets/me.jpg';

const About = () => {
  return (
    <div
      id='about'
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-mirror='true'
      className='w-full md:h-screen p-2 flex items-center py-16'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#d4af37]'>
            Sobre
          </p>
          <h2 className='py-2'>Quem sou eu</h2>
          <p className='py-2 text-gray-300'>
            Como desenvolvedor front-end, meu objetivo é utilizar minhas
            habilidades em React, TypeScript, Redux, HTML e CSS, para criar
            aplicativos da Web responsivos e de alta qualidade que melhorem a
            experiência do usuário e impulsionem o crescimento dos negócios.
          </p>
          <p className='py-2 text-gray-300'>
            Eu me esforço para me manter atualizado com as tecnologias mais
            recentes e as melhores práticas no desenvolvimento web, além disso,
            colaborar com equipes multifuncionais para oferecer soluções que
            superem as expectativas do usuário.
          </p>
          <p className='py-2 text-gray-300'>
            Sou apaixonado em aprender novas tecnologias e tudo o que cerca o
            mundo da tecnologia da informação.
          </p>
          <p className='py-2 text-gray-300'>
            Possuo experiência em React, Redux, TypeScript, Angular, HTML, CSS,
            Material-UI, Tailwind, consumo de API dentre outras coisas.
          </p>
          <p className='py-2 text-gray-300 underline cursor-pointer'>
            Confira meus projetos.
          </p>
        </div>
        <div
          className='w-full h-auto m-auto shadow-xl
          shadow-[#3f3f3f] rounded flex items-center justify-center
        p-4 hover:scale-110 ease-in duration-300'
        >
          <Image className='rounded-xl' src={meImg} alt='Iuri Mendes' />
        </div>
      </div>
    </div>
  );
};

export default About;
