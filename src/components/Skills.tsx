import { useTranslation } from 'react-i18next';
import { SkillsDetails } from './SkillsDetails';
import reactImg from '../../public/assets/skills/react.png';
import typescriptImg from '../../public/assets/skills/typescript.png';
import nextjsImg from '../../public/assets/skills/nextjs.png';
import reduxImg from '../../public/assets/skills/redux.png';
import javaScriptImg from '../../public/assets/skills/javaScript.png';
import muiImg from '../../public/assets/skills/material-ui.png';
import tailwindImg from '../../public/assets/skills/tailwind.png';
import vueJsImg from '../../public/assets/skills/vuejs.png';
import dotNetImg from '../../public/assets/skills/dotnet.png';
import tanstackImg from '../../public/assets/skills/tanstack.svg';
import i18nImg from '../../public/assets/skills/i18n.svg';
import nestjsImg from '../../public/assets/skills/nestJS.png';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-base md:text-lg font-bold text-brand-black mb-3 opacity-80 uppercase tracking-widest">
          {t('skills.title_small')}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black">
          {t('skills.title_large')}
        </h2>
      </div>
      <h2 className='py-2 pb-8'>{t('skills.subtitle')}</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
        <SkillsDetails imgSrc={reactImg} name='React' bgColor="bg-brand-cyan" />
        <SkillsDetails imgSrc={reactImg} name='React Native' bgColor="bg-brand-cyan" />
        <SkillsDetails imgSrc={nextjsImg} name='Next.js' bgColor="bg-brand-white" />
        <SkillsDetails imgSrc={typescriptImg} name='TypeScript' bgColor="bg-[#3178C6]" />
        <SkillsDetails imgSrc={tailwindImg} name='Tailwind CSS' bgColor="bg-brand-pink" />
        <SkillsDetails imgSrc={tanstackImg} name='Tanstack Query' bgColor="bg-[#FF4154]" />
        <SkillsDetails imgSrc={vueJsImg} name='Vue.js' bgColor="bg-[#4FC08D]" />
        <SkillsDetails imgSrc={reduxImg} name='Zustand & Redux' bgColor="bg-brand-purple" />
        <SkillsDetails imgSrc={javaScriptImg} name='JavaScript' bgColor="bg-brand-yellow" />
        <SkillsDetails imgSrc={muiImg} name='MUI / Radix UI' bgColor="bg-[#007FFF]" />
        <SkillsDetails imgSrc={dotNetImg} name='.Net Core' bgColor="bg-[#512BD4]" />
        <SkillsDetails imgSrc={nestjsImg} name='NestJS' bgColor="bg-[#E02347]" />
        <SkillsDetails imgSrc={i18nImg} name='i18n' bgColor="bg-brand-white" />
      </div>
    </section>
  );
};

export default Skills;
