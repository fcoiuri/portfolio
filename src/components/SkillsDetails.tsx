import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SkillsDetailsProps {
  imgSrc: StaticImageData;
  name: string;
  bgColor?: string;
}

export const SkillsDetails: React.FC<SkillsDetailsProps> = ({
  imgSrc,
  name,
  bgColor = "bg-brand-white"
}) => {
  return (
    <div className={`neo-box ${bgColor} p-6 h-full flex flex-col justify-center items-center gap-6 cursor-pointer group`}>
      <div className='w-20 h-20 bg-brand-white rounded-2xl border-4 border-brand-black flex items-center justify-center p-3 shadow-[4px_4px_0_#1A1A1A] group-hover:-translate-y-2 group-hover:shadow-[6px_6px_0_#1A1A1A] transition-all duration-300'>
        <Image src={imgSrc} alt={name} width={50} height={50} className="object-contain" />
      </div>
      <div className='flex flex-col items-center justify-center text-center'>
        <h3 className={`text-lg md:text-xl font-bold ${bgColor === 'bg-brand-white' ? 'text-brand-black' : 'text-brand-white drop-shadow-[2px_2px_0_#1A1A1A]'} tracking-wide`}>
          {name}
        </h3>
      </div>
    </div>
  );
};
