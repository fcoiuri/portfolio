import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
  imgSrc: StaticImageData;
  title: string;
  projectUrl: string;
  technology: string;
  altImg: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  title,
  projectUrl,
  technology,
  altImg
}) => {
  return (
    <div
      className='relative flex items-center justify-center
  h-auto w-full shadow-xl shadow-[#3f3f3f] rounded-xl p-4
  group hover:bg-gradient-to-r from-[#BF953F] via-[#B38728] to-[#FCF6BA]'
    >
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={imgSrc}
        alt={altImg}
      />
      <div
        className='hidden group-hover:block absolute top-[50%]
      left-[50%] translate-x-[-50%] translate-y-[-50%]'
      >
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-4 text-white text-center'>{technology}</p>
        <Link href={projectUrl}>
          <p
            className='text-center py-3 rounded-lg bg-white
        text-gray-700 font-bold text-lg cursor-pointer'
          >
            Mais informações
          </p>
        </Link>
      </div>
    </div>
  );
};
