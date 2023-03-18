import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-[#181818]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image
          src='/../public/assets/navLogo.png'
          alt='/'
          width='85'
          height='50'
        />
        <div>
          <ul className='hidden md:flex '>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase'>Página Inicial</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase'>Sobre</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase'>Habilidades</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase'>Projetos</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase'>Contato</li>
            </Link>
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
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#282828] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src='/../public/assets/navLogo.png'
                alt='/'
                width='75'
                height='50'
              />
              <div
                className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Vamos construir algo juntos
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Página Inicial</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Sobre</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Habilidades</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Projetos</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contato</li>
              </Link>
            </ul>
            <div className='pt-20'>
              <p className='uppercase tracking-widest text-[#d4af37] font-semibold'>
                Entre em contato
              </p>
              <div
                className='flex items-center justify-between my-4
              w-full sm:w-[80%]'
              >
                <div
                  className='rounded-full shadow-lg shadow-[#494949]
                p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <FaLinkedinIn size={'1.5em'} />
                </div>
                <div
                  className='rounded-full shadow-lg shadow-[#494949]
                p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <AiOutlineMail size={'1.5em'} />
                </div>
                <div
                  className='rounded-full shadow-lg shadow-[#494949]
                p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <FaGithub size={'1.5em'} />
                </div>
                <div
                  className='rounded-full shadow-lg shadow-[#494949]
                p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                >
                  <BsFillPersonLinesFill size={'1.5em'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
