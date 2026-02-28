import React from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [nav, setNav] = React.useState(false);
  const [showShadow, setShowShadow] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  React.useEffect(() => {
    const handleShowShadow = () =>
      setShowShadow(window.scrollY >= 90 ? true : false);

    window.addEventListener('scroll', handleShowShadow);
  }, []);

  return (
    <div
      className={
        showShadow
          ? 'fixed w-full h-20 z-[100] bg-brand-beige border-b-4 border-brand-black shadow-[0_8px_0_#1A1A1A] transition-all duration-300'
          : 'fixed w-full h-20 z-[100] bg-brand-beige transition-all duration-300'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
        <Link href='/'>
          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='w-12 h-12 min-w-[48px] bg-brand-cyan rounded-xl border-4 border-brand-black flex items-center justify-center text-lg font-black shadow-[4px_4px_0_#1A1A1A] whitespace-nowrap tracking-tighter'>
              {'</>'}
            </div>
            <span className='text-xl font-bold text-brand-black hidden sm:block'>
              dev.portfolio
            </span>
          </div>
        </Link>
        <div>
          <ul className='hidden md:flex gap-8 items-center'>
            <li className='text-brand-black font-semibold text-base hover:text-brand-pink'>
              <Link href='/'>{t('navbar.home')}</Link>
            </li>

            <li className='text-brand-black font-semibold text-base hover:text-brand-yellow'>
              <Link href='/#skills'>{t('navbar.skills')}</Link>
            </li>
            <li className='text-brand-black font-semibold text-base hover:text-brand-cyan'>
              <Link href='/#experience'>{t('navbar.experience')}</Link>
            </li>
            <li className='text-brand-black font-semibold text-base hover:text-brand-green'>
              <Link href='/#contact'>{t('navbar.contact')}</Link>
            </li>
            <li className='flex items-center gap-2 ml-4'>
              <button
                onClick={() => changeLanguage('pt')}
                className={`text-sm font-bold px-2 py-1 border-2 border-brand-black ${i18n.language === 'pt' || i18n.language === 'pt-BR' ? 'bg-brand-pink text-brand-black' : 'bg-brand-white text-brand-black hover:bg-brand-beige'} shadow-[2px_2px_0_#1A1A1A] transition-all`}
              >
                PT
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`text-sm font-bold px-2 py-1 border-2 border-brand-black ${i18n.language === 'en' ? 'bg-brand-yellow text-brand-black' : 'bg-brand-white text-brand-black hover:bg-brand-beige'} shadow-[2px_2px_0_#1A1A1A] transition-all`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`text-sm font-bold px-2 py-1 border-2 border-brand-black ${i18n.language === 'es' ? 'bg-brand-cyan text-brand-black' : 'bg-brand-white text-brand-black hover:bg-brand-beige'} shadow-[2px_2px_0_#1A1A1A] transition-all`}
              >
                ES
              </button>
            </li>
          </ul>
          <div className='md:hidden cursor-pointer' onClick={handleNav}>
            <AiOutlineMenu size={25} className='text-brand-black' />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 backdrop-blur-sm transition-all z-[110]' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-brand-beige border-r-4 border-brand-black p-8 ease-in duration-300 shadow-[12px_0_0_#1A1A1A] z-[120]'
              : 'fixed left-[-100%] top-0 p-8 ease-in duration-300 h-screen z-[120]'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 min-w-[48px] bg-brand-cyan rounded-xl border-4 border-brand-black flex items-center justify-center text-lg font-black shadow-[4px_4px_0_#1A1A1A] whitespace-nowrap tracking-tighter'>
                  {'</>'}
                </div>
              </div>
              <div
                className='w-12 h-12 min-w-[48px] bg-brand-pink rounded-full border-4 border-brand-black flex items-center justify-center shadow-[4px_4px_0_#1A1A1A] cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform'
                onClick={handleNav}
              >
                <AiOutlineClose className='text-brand-black' />
              </div>
            </div>
          </div>
          <div className='py-8 flex flex-col'>
            <ul className='flex flex-col gap-6 text-xl font-bold text-brand-black'>
              <Link href='/'>
                <li onClick={handleNav} className='hover:text-brand-pink'>
                  {t('navbar.home')}
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={handleNav} className='hover:text-brand-yellow'>
                  {t('navbar.skills')}
                </li>
              </Link>
              <Link href='/#experience'>
                <li onClick={handleNav} className='hover:text-brand-cyan'>
                  {t('navbar.experience')}
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={handleNav} className='hover:text-brand-green'>
                  {t('navbar.contact')}
                </li>
              </Link>
            </ul>
            <div className='flex items-center gap-4 mt-8'>
              <button
                onClick={() => { changeLanguage('pt'); handleNav(); }}
                className={`text-base font-bold px-3 py-2 border-4 border-brand-black ${i18n.language === 'pt' || !i18n.language ? 'bg-brand-pink text-brand-black' : 'bg-brand-white text-brand-black'} shadow-[4px_4px_0_#1A1A1A]`}
              >
                PT
              </button>
              <button
                onClick={() => { changeLanguage('en'); handleNav(); }}
                className={`text-base font-bold px-3 py-2 border-4 border-brand-black ${i18n.language === 'en' ? 'bg-brand-yellow text-brand-black' : 'bg-brand-white text-brand-black'} shadow-[4px_4px_0_#1A1A1A]`}
              >
                EN
              </button>
              <button
                onClick={() => { changeLanguage('es'); handleNav(); }}
                className={`text-base font-bold px-3 py-2 border-4 border-brand-black ${i18n.language === 'es' ? 'bg-brand-cyan text-brand-black' : 'bg-brand-white text-brand-black'} shadow-[4px_4px_0_#1A1A1A]`}
              >
                ES
              </button>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center mt-auto mb-4'>
            <p className='uppercase tracking-widest text-brand-black font-bold mb-6'>
              Entre em contato
            </p>
            <div className='flex items-center gap-4'>
              <a
                href='https://linkedin.com/in/fcoiuri/'
                target='_blank'
                rel='noreferrer'
                className='bg-brand-purple neo-btn p-4 flex items-center justify-center'
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href='mailto: fcoiuri@gmail.com'
                className='bg-brand-yellow neo-btn p-4 flex items-center justify-center'
              >
                <AiOutlineMail size={24} />
              </a>
              <a
                href='https://github.com/fcoiuri'
                target='_blank'
                rel='noreferrer'
                className='bg-brand-pink neo-btn p-4 flex items-center justify-center'
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
