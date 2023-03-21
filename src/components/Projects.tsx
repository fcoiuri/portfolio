import React from 'react';
import { ProjectItem } from './ProjectItem';
import recognitionImg from '../../public/assets/projects/recognition.png';
import pokemonImg from '../../public/assets/projects/pokemon.png';

const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full md:h-screen p-2 flex items-center py-16'
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-mirror='true'
    >
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#d4af37]'>
          Projetos
        </p>
        <h2 className='py-2'>O que já desenvolvi</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
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
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
