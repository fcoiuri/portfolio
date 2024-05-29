import React from 'react';
import Image from 'next/image';
import { SkillsDetails } from './SkillsDetails';
import reactImg from '../../public/assets/skills/react.png';
import typescriptImg from '../../public/assets/skills/typescript.png';
import nextjsImg from '../../public/assets/skills/nextjs.png';
import reduxImg from '../../public/assets/skills/redux.png';
import javaScriptImg from '../../public/assets/skills/javaScript.png';
import muiImg from '../../public/assets/skills/material-ui.png';
import tailwindImg from '../../public/assets/skills/tailwind.png';
import cssImg from '../../public/assets/skills/css.png';
import vueJsImg from '../../public/assets/skills/vuejs.png';
import bootstrapImg from '../../public/assets/skills/bootstrap.png';
import dotNetImg from '../../public/assets/skills/dotnet.png';
import aspNetImg from '../../public/assets/skills/aspnet.png';

const Skills = () => {
  return (
    <div
      id='skills'
      className='w-full lg:h-screen p-2'
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-mirror='true'
    >
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#d4af37]'>
          Habilidades
        </p>
        <h2 className='py-2'>Tecnologias que domino</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillsDetails imgSrc={reactImg} name='React' />
          <SkillsDetails imgSrc={nextjsImg} name='Next.js' />
          <SkillsDetails imgSrc={vueJsImg} name='Vue.js' />
          <SkillsDetails imgSrc={reduxImg} name='Redux' />
          <SkillsDetails imgSrc={typescriptImg} name='TypeScript' />
          <SkillsDetails imgSrc={javaScriptImg} name='JavaScript' />
          <SkillsDetails imgSrc={muiImg} name='MUI' />
          <SkillsDetails imgSrc={tailwindImg} name='Tailwind CSS' />
          <SkillsDetails imgSrc={bootstrapImg} name='Bootstrap' />
          <SkillsDetails imgSrc={cssImg} name='CSS' />
          <SkillsDetails imgSrc={dotNetImg} name='.Net' />
          <SkillsDetails imgSrc={aspNetImg} name='AspNet' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
