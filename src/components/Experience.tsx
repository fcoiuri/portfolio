import React from 'react';
import { FaLaptopCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24 relative z-10">
      <div className="text-center mb-16 md:mb-24">
        <p className="text-base md:text-lg font-bold text-brand-black mb-3 opacity-80 uppercase tracking-widest">
          {t('experience.title_small')}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black">
          {t('experience.title_large')}
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[900px] relative">
          {/* Central Line for desktop, Left Line for mobile */}
          <div className="absolute left-[20px] md:left-1/2 md:-ml-[2px] top-0 bottom-0 w-[4px] bg-brand-black z-0"></div>

          <div className="space-y-12">

            {/* Sonae Sierra */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 md:-ml-6 top-6 w-12 h-12 rounded-full border-4 border-brand-black bg-brand-cyan shadow-[4px_4px_0_#1A1A1A] z-10 flex items-center justify-center">
                <FaLaptopCode className="text-brand-black text-xl" />
              </div>
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="neo-box bg-brand-white p-6 md:p-8 hover:-translate-y-2 hover:shadow-[12px_12px_0_#1A1A1A] transition-all duration-300">
                  <div className="inline-block bg-brand-yellow neo-badge px-3 py-1 text-sm font-bold mb-4">
                    {t('experience.date_sonae')} - {t('experience.present')}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-black mb-1">
                    {t('experience.role_frontend_pleno')}
                  </h3>
                  <h4 className="text-lg font-bold text-brand-cyan mb-4">Sonae Sierra</h4>
                  <p className="text-brand-black/80 font-medium mb-4">
                    {t('experience.sonae_desc')}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">{t('experience.label_app')}:</span> React Native, Expo, Zustand.<br />
                    <span className="font-bold">{t('experience.label_web')}:</span> React 19, Tailwind CSS 4, Radix UI.
                  </p>
                </div>
              </div>
            </div>

            {/* Max.ia */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 md:-ml-6 top-6 w-12 h-12 rounded-full border-4 border-brand-black bg-brand-pink shadow-[4px_4px_0_#1A1A1A] z-10 flex items-center justify-center">
                <FaLaptopCode className="text-brand-black text-xl" />
              </div>
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="neo-box bg-brand-white p-6 md:p-8 hover:-translate-y-2 hover:shadow-[12px_12px_0_#1A1A1A] transition-all duration-300">
                  <div className="inline-block bg-brand-yellow neo-badge px-3 py-1 text-sm font-bold mb-4">
                    {t('experience.date_maxia')}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-black mb-1">
                    {t('experience.role_frontend_pleno')}
                  </h3>
                  <h4 className="text-lg font-bold text-brand-pink mb-4">Max.ia Education</h4>
                  <p className="text-brand-black/80 font-medium mb-4">
                    {t('experience.maxia_desc')}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">{t('experience.label_stack')}:</span> Next.js, TypeScript, React Query, Cypress, Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            {/* Techdes */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 md:-ml-6 top-6 w-12 h-12 rounded-full border-4 border-brand-black bg-brand-purple shadow-[4px_4px_0_#1A1A1A] z-10 flex items-center justify-center">
                <FaBriefcase className="text-brand-black text-xl" />
              </div>
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="neo-box bg-brand-white p-6 md:p-8 hover:-translate-y-2 hover:shadow-[12px_12px_0_#1A1A1A] transition-all duration-300">
                  <div className="inline-block bg-brand-yellow neo-badge px-3 py-1 text-sm font-bold mb-4">
                    {t('experience.date_techdes')}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-black mb-1">
                    {t('experience.role_fullstack')}
                  </h3>
                  <h4 className="text-lg font-bold text-brand-purple mb-4">Techdes</h4>
                  <p className="text-brand-black/80 font-medium mb-4">
                    {t('experience.techdes_desc')}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">{t('experience.label_stack')}:</span> React, Next.js, ASP.NET Core, Vue.js, PostgreSQL.
                  </p>
                </div>
              </div>
            </div>

            {/* FitBank 450 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 md:-ml-6 top-6 w-12 h-12 rounded-full border-4 border-brand-black bg-brand-green shadow-[4px_4px_0_#1A1A1A] z-10 flex items-center justify-center">
                <FaBriefcase className="text-brand-black text-xl" />
              </div>
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="neo-box bg-brand-white p-6 md:p-8 hover:-translate-y-2 hover:shadow-[12px_12px_0_#1A1A1A] transition-all duration-300">
                  <div className="inline-block bg-brand-yellow neo-badge px-3 py-1 text-sm font-bold mb-4">
                    {t('experience.date_fitbank')}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-black mb-1">
                    {t('experience.role_frontend')}
                  </h3>
                  <h4 className="text-lg font-bold text-brand-green mb-4">FitBank 450</h4>
                  <p className="text-brand-black/80 font-medium mb-4">
                    {t('experience.fitbank_desc')}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">{t('experience.label_stack')}:</span> React, Redux, Material-UI, Prisma, TypeScript.
                  </p>
                </div>
              </div>
            </div>

            {/* TRT */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 md:-ml-6 top-6 w-12 h-12 rounded-full border-4 border-brand-black bg-brand-yellow shadow-[4px_4px_0_#1A1A1A] z-10 flex items-center justify-center">
                <FaGraduationCap className="text-brand-black text-xl" />
              </div>
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="neo-box bg-brand-white p-6 md:p-8 hover:-translate-y-2 hover:shadow-[12px_12px_0_#1A1A1A] transition-all duration-300">
                  <div className="inline-block bg-brand-cyan neo-badge px-3 py-1 text-sm font-bold mb-4">
                    {t('experience.date_trt')}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-black mb-1">
                    {t('experience.role_sustain')}
                  </h3>
                  <h4 className="text-lg font-bold text-brand-yellow mb-4">TRT 7ª Região</h4>
                  <p className="text-brand-black/80 font-medium mb-4">
                    {t('experience.trt_desc')}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">{t('experience.label_stack')}:</span> React, JavaScript, HTML, CSS, SQL.
                  </p>
                </div>
              </div>
            </div>

            {/* PIBITI */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 md:-ml-6 top-6 w-12 h-12 rounded-full border-4 border-brand-black bg-brand-cyan shadow-[4px_4px_0_#1A1A1A] z-10 flex items-center justify-center">
                <FaGraduationCap className="text-brand-black text-xl" />
              </div>
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="neo-box bg-brand-white p-6 md:p-8 hover:-translate-y-2 hover:shadow-[12px_12px_0_#1A1A1A] transition-all duration-300">
                  <div className="inline-block bg-brand-yellow neo-badge px-3 py-1 text-sm font-bold mb-4">
                    {t('experience.date_pibiti')}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-black mb-1">
                    {t('experience.role_scholar')}
                  </h3>
                  <h4 className="text-lg font-bold text-brand-cyan mb-4">PIBITI IFCE</h4>
                  <p className="text-brand-black/80 font-medium mb-4">
                    {t('experience.pibiti_desc')}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">{t('experience.label_stack')}:</span> React, Node.js, Firebase, JavaScript.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
