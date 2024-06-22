import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from '../../public/assets/logo.svg';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const [showShadow, setShowShadow] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
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
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#181818]'
          : 'fixed w-full h-20 shadow-xl z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src={logo}
            width='100'
            height='50'
            alt='/Iuri Mendes Logo'
            className='cursor-pointer pt-3 pl-5'
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/'>Página Inicial</Link>
            </li>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/#about'>Sobre</Link>
            </li>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/#skills'>Habilidades</Link>
            </li>
            <li className='ml-10 text-sm uppercase'>
              <Link href='/#experience'>Currículo</Link>
            </li>
            <li className='ml-10 mr-10 text-sm uppercase'>
              <Link href='/#contact'>Contato</Link>
            </li>
          </ul>
          <div className='md:hidden cursor-pointer' onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#282828] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src={logo}
                alt='Iuri Mendes logo'
                width='70'
                height='35'
                className='left-0'
              />
              <div
                className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Página Inicial
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Sobre
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Habilidades
                </li>
              </Link>
              <Link href='/#experience'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Currículo
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Contato
                </li>
              </Link>
            </ul>
          </div>
          <div className='flex flex-col items-center justify-center mt-auto mb-4'>
            <p className='uppercase tracking-widest text-[#d4af37] font-semibold mb-4'>
              Entre em contato
            </p>
            <div className='flex items-center justify-between w-[80%]'>
              <a
                href='https://linkedin.com/in/fcoiuri/'
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className='rounded-full shadow-lg shadow-[#494949]
                  p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <FaLinkedinIn size={'1.5em'} />
                </div>
              </a>
              <a href='mailto: fcoiuri@gmail.com'>
                <div
                  className='rounded-full shadow-lg shadow-[#494949]
                  p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <AiOutlineMail size={'1.5em'} />
                </div>
              </a>
              <a
                href='https://github.com/fcoiuri'
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className='rounded-full shadow-lg shadow-[#494949]
                  p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <FaGithub size={'1.5em'} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
