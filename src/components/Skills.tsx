import React from 'react';
import Image from 'next/image';
import { SkillsDetails } from './SkillsDetails';

const Skills = () => {
  return (
    <div
      className='w-full lg:h-screen p-2'
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-mirror='true'
    >
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#4e4ae3]'>
          Habilidades
        </p>
        <h2 className='py-2'>O que eu faço</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillsDetails
            imgSrc='/../public/assets/skills/react.png'
            name='React'
          />
          <SkillsDetails
            imgSrc='/../public/assets/skills/typescript.png'
            name='TypeScript'
          />
          <SkillsDetails
            imgSrc='/../public/assets/skills/nextjs.png'
            name='Next.js'
          />
          <SkillsDetails
            imgSrc='/../public/assets/skills/redux.png'
            name='Redux'
          />
          <SkillsDetails
            imgSrc='/../public/assets/skills/javaScript.png'
            name='JavaScript'
          />
          <SkillsDetails
            imgSrc='/../public/assets/skills/material-ui.png'
            name='MUI'
          />
          <SkillsDetails
            imgSrc='/../public/assets/skills/tailwind.png'
            name='Tailwind CSS'
          />
          <SkillsDetails imgSrc='/../public/assets/skills/css.png' name='CSS' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
