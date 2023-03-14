import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <p className='uppercase text-xl tracking-widest text-[#4e4ae3]'>
            Sobre
          </p>
          <h2 className='py-2'>Quem sou eu</h2>
          <p className='py-2 text-gray-600'>
            Desenvolvedor Front-end com mais de 1 ano de experiência. Me
            especializei na criação de aplicações web responsivas para
            dispositivos móveis que se conectam com API e outras tecnologias
            back-end. Sou apaixonado em aprender novas tecnologias e tudo o que
            cerca o mundo da tecnologia da informação.
          </p>
          <p className='py-2 text-gray-600'>
            Atualmente trabalho com React, Redux, TypeScript, Material-Ui,
            consumo de API dentre outras coisas.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Confira meus projetos.
          </p>
        </div>
        <div
          className='w-full h-auto m-auto shadow-xl 
          shadow-gray-400 rounded flex items-center justify-center
        p-4 hover:scale-110 ease-in duration-300'
        >
          <Image
            className='rounded-xl'
            src='/../public/assets/me.jpg'
            alt='Iuri Mendes'
            width='350'
            height='150'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
