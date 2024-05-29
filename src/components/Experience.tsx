import React from 'react';
import { ProjectItem } from './ProjectItem';
import recognitionImg from '../../public/assets/projects/recognition.png';
import pokemonImg from '../../public/assets/projects/pokemon.png';

const Experience = () => {
  return (
    <div
      id='experience'
      className='w-full md:h-screen p-2 flex items-center'
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-mirror='true'
    >
      <div className='max-w-[1240px] mx-auto px-2 '>
        <p className='uppercase text-xl tracking-widest text-[#d4af37]'>
          Currículo
        </p>
        <h2 className='py-2'>Experiências</h2>
        <div className='w-full py-4 flex justify-center items-center'>
          <div className='w-full'>
            <main className='grid'>
              <div className='relative'>
                <div className='border-l-2 border-gray-700 pl-6 pr-6'>
                  <div className='relative'>
                    <a href='https://maxia.education/' target='_blank'>
                      <div className='absolute w-4 h-4 bg-[#d4af37] rounded-full -left-8 top-0.5'></div>
                      <div className='rounded-lg p-5 border border-slate-400 bg-[#373737] cursor-pointer transition-shadow  duration-300 mb-5 hover:shadow-sm  hover:shadow-white'>
                        <h4 className='text-[#d4af37]'>Max.IA Education</h4>
                        <h3 className='text-lg pt-2 pb-1 font-medium '>
                          Desenvolvedor Front-end pleno
                        </h3>
                        <span>Dez 2023 - Presente</span>
                        <p className='pt-1 text-base'>
                          <span className='font-semibold'>Tecnologias:</span>{' '}
                          React, Next.js, TypeScript, Bootstrap, Tailwind CSS,
                          Docker.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className='relative'>
                    <a href='https://techhive.com.br/' target='_blank'>
                      <div className='absolute w-4 h-4 bg-[#d4af37] rounded-full -left-8 top-0.5'></div>
                      <div className='rounded-lg p-5 border border-slate-400 bg-[#373737] cursor-pointer transition-shadow  duration-300 mb-5 hover:shadow-sm  hover:shadow-white'>
                        <h4 className='text-[#d4af37]'>Tech Hive</h4>
                        <h3 className='text-lg pt-2 pb-1 font-medium '>
                          Desenvolvedor Full Stack Pleno
                        </h3>
                        <span>Jul 2023 - Dez 2023</span>
                        <p className='pt-1 text-base'>
                          <span className='font-semibold'>Tecnologias:</span>{' '}
                          Vue.js, React, Next.js, React Query, jQuery, i18n,
                          TypeScript, JavaScript, .Net, ASP.NET Core - Identity,
                          Jenkins, EntityFramework Core, ASP.NET MVC,
                          PostgreSQL, PHP Laravel.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className='relative'>
                    <a href='https://fitbank.com.br/' target='_blank'>
                      <div className='absolute w-4 h-4 bg-[#d4af37] rounded-full -left-8 top-0.5'></div>
                      <div className='rounded-lg p-5 border border-slate-400 bg-[#373737] cursor-pointer transition-shadow  duration-300 mb-5 hover:shadow-sm  hover:shadow-white'>
                        <h4 className='text-[#d4af37]'>FitBank 450</h4>
                        <h3 className='text-lg pt-2 pb-1 font-medium '>
                          Desenvolvedor Front-end
                        </h3>
                        <span>Jan 2022 - Jul 2023</span>
                        <p className='pt-1 text-base'>
                          <span className='font-semibold'>Tecnologias:</span>{' '}
                          React, Next.js, Redux, Material-UI, Prisma,
                          TypeScript, NextAuth.js, i18n, Node.js, CI/CD Azure
                          Pipelines, GitHub Actions.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='relative'>
                    <a href='https://www.trt7.jus.br/' target='_blank'>
                      <div className='absolute w-4 h-4 bg-[#d4af37] rounded-full -left-8 top-0.5'></div>
                      <div className='rounded-lg p-5 border border-slate-400 bg-[#373737] cursor-pointer transition-shadow  duration-300 mb-5 hover:shadow-sm  hover:shadow-white'>
                        <h4 className='text-[#d4af37]'>
                          Tribunal Regional do Trabalho
                        </h4>
                        <h3 className='text-lg pt-2 pb-1 font-medium '>
                          Estagiário de Sustentação de Sistemas
                        </h3>
                        <span>Jan 2020 - Dez 2021</span>
                        <p className='pt-1 text-base'>
                          <span className='font-semibold'>Tecnologias:</span>{' '}
                          JavaScript, jQuery, HTML, CSS, Node.js.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='relative'>
                    <a href='https://ifce.edu.br/prpi/pibiti' target='_blank'>
                      <div className='absolute w-4 h-4 bg-[#d4af37] rounded-full -left-8 top-0.5'></div>
                      <div className='rounded-lg p-5 border border-slate-400 bg-[#373737] cursor-pointer transition-shadow  duration-300 mb-5 hover:shadow-sm  hover:shadow-white'>
                        <h4 className='text-[#d4af37]'>PIBITI IFCE</h4>
                        <h3 className='text-lg pt-2 pb-1 font-medium '>
                          Bolsista Full Stack
                        </h3>
                        <span>Jun 2019 - Jul 2020</span>
                        <p className='pt-1 text-base'>
                          <span className='font-semibold'>Tecnologias:</span>
                          React, Next.js, TypeScript, Bootstrap, Tailwind CSS,
                          Docker.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/*
        <div className='grid md:grid-cols-2 gap-8'>
          {/* <div>
            <span className='font-semibold text-xl'>
              Desenvolvedor Front-end pleno
            </span>
            <div>
              <span className='font-normal'>
                <a href='https://maxia.education/' target='_blank'>
                  Max.IA Education
                </a>{' '}
                | Dez 2023 - Presente
              </span>
            </div>
            <li className='mt-2'>
              <span className='font-semibold'>Tecnologias:</span> React,
              Next.js, TypeScript, Bootstrap, Tailwind CSS, Docker.
            </li>
          </div>
          <div>
            <span className='font-semibold text-xl'>
              Desenvolvedor Front-end pleno
            </span>
            <div>
              <span className='font-normal'>
                <a href='https://maxia.education/' target='_blank'>
                  Max.IA Education
                </a>{' '}
                | Dez 2023 - Presente
              </span>
            </div>
            <li className='mt-2'>
              <span className='font-semibold'>Tecnologias:</span> React,
              Next.js, TypeScript, Bootstrap, Tailwind CSS, Docker.
            </li>
          </div> */}
        {/* <ProjectItem
            title={'Recognição Visuográfica'}
            imgSrc={recognitionImg}
            altImg={'Projeto Recognicão Visuográfica de local de crime'}
            projectUrl={'/recognition'}
            technology={'React.js'}
          />
          <ProjectItem
            title={'Pokémon'}
            imgSrc={pokemonImg}
            altImg={'Projeto Pokémon'}
            projectUrl={'/pokemon'}
            technology={'React.js'}
          /> */}
        {/*
        </div>
      */}
      </div>
    </div>
  );
};

export default Experience;
