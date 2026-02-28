import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import iuriImg from '../../public/assets/Iuri.png';

const Main = () => {
  const { t } = useTranslation();

  return (
    <div
      id='home'
      className='w-full min-h-screen pt-24 pb-16 flex items-center justify-center relative z-10 overflow-hidden'
    >
      {/* Decorative shapes - hidden on mobile */}
      <div className='absolute top-[100px] left-[50px] w-[120px] h-[120px] bg-brand-cyan rounded-full border-[6px] border-brand-black opacity-80 hidden md:block'></div>
      <div className='absolute top-[200px] right-[80px] w-[100px] h-[100px] bg-brand-yellow rounded-tr-full rounded-br-full rounded-bl-full border-[6px] border-brand-black rotate-45 opacity-80 hidden md:block'></div>
      <div className='absolute bottom-[150px] left-[100px] w-[80px] h-[80px] bg-brand-pink rounded-full border-[6px] border-brand-black opacity-80 hidden md:block'></div>
      <div className='absolute bottom-[200px] right-[120px] w-[90px] h-[90px] bg-brand-purple rounded-tl-full rounded-bl-full rounded-br-full border-[6px] border-brand-black opacity-80 hidden md:block'></div>

      <section className='max-w-[1200px] w-full mx-auto px-6 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10'>
        <div>
          <p className='text-lg md:text-xl font-semibold text-brand-black mb-4 opacity-80'>
            {t('hero.greeting')}
          </p>

          <h1 className='text-5xl md:text-[clamp(48px,6vw,72px)] font-extrabold leading-[1.1] text-brand-black mb-6'>
            {t('hero.title_line1')}
            <br />
            <span className='text-brand-cyan drop-shadow-[2px_2px_0_#1A1A1A]'>{t('hero.title_line2')}</span>
          </h1>

          <p className='text-lg md:text-xl font-medium text-brand-black leading-relaxed mb-8 opacity-90 max-w-xl'>
            {t('hero.description')}
          </p>

          <a href="#projetos">
            <button className='bg-brand-yellow neo-btn py-4 px-10 text-lg w-full md:w-auto hover:bg-brand-pink transition-colors'>
              {t('hero.btn_projects')}
            </button>
          </a>
        </div>

        {/* Hero Image/Card */}
        <div className='relative mt-10 lg:mt-0 w-full max-w-md mx-auto'>
          <div className='bg-brand-pink rounded-[32px] border-[6px] border-brand-black p-6 md:p-10 shadow-[12px_12px_0px_#1A1A1A] relative'>
            <div className='w-full h-[300px] md:h-[400px] bg-brand-white rounded-3xl border-4 border-brand-black flex items-center justify-center overflow-hidden relative'>
              <Image src={iuriImg} alt="Iuri Mendes" fill className="object-cover" />
            </div>

            {/* Floating badge */}
            <div className='absolute bottom-6 right-6 bg-brand-green border-4 border-brand-black rounded-full py-3 px-6 text-sm md:text-base font-bold text-brand-black flex items-center gap-2 shadow-[4px_4px_0_#1A1A1A]'>
              <div className='w-3 h-3 bg-brand-black rounded-full animate-pulse'></div>
              <span className='hidden sm:block'>{t('hero.badge_available_desktop')}</span>
              <span className='block sm:hidden'>{t('hero.badge_available_mobile')}</span>
            </div>
          </div>

          {/* Floating icons - Hidden on mobile */}
          <div className='absolute -top-5 -left-5 w-20 h-20 bg-brand-cyan rounded-2xl border-4 border-brand-black flex items-center justify-center text-4xl shadow-[6px_6px_0_#1A1A1A] hidden md:flex'>
            <FaGithub className="text-brand-black" />
          </div>

          <div className='absolute top-20 -right-8 w-[70px] h-[70px] bg-brand-yellow rounded-full border-4 border-brand-black flex items-center justify-center text-3xl shadow-[6px_6px_0_#1A1A1A] hidden md:flex'>
            <FaLinkedinIn className="text-brand-black" />
          </div>

          {/* Name Badge with Arrow */}
          <div className='absolute top-[50px] right-[40px] md:right-[100px] z-20 hidden md:block'>
            {/* The Badge */}
            <div className='bg-brand-blue border-4 border-brand-black rounded-full py-2 px-6 text-lg font-extrabold text-brand-black shadow-[4px_4px_0_#1A1A1A] relative z-10'>
              {t('hero.dev_badge')}
            </div>
            {/* The Decorative Arrow/Cursor */}
            {/* <svg
              className='absolute -bottom-6 -left-4 w-8 h-8 text-brand-purple drop-shadow-[2px_2px_0_#1A1A1A] -rotate-12 z-0'
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinejoin="round"
            >
              <path d="M4 4l16 7-7 2-2 7L4 4z" />
            </svg> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
