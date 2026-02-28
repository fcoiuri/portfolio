import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import meuNiverImg from '../../public/assets/projects/meuniveronline.png';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projetos" className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24 relative z-10">
            <div className="neo-box bg-brand-purple p-8 md:p-16 relative">
                <div className="absolute -top-4 md:-top-6 left-6 md:left-12 bg-brand-yellow neo-badge px-6 py-2 text-sm md:text-base font-bold text-brand-black flex items-center gap-2">
                    {t('projects.highlight_badge')}
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-6 md:mt-0">
                    <div className="flex-1">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-brand-white mb-6 drop-shadow-[2px_2px_0_#1A1A1A]">
                            {t('projects.title')}
                        </h3>
                        <p className="text-lg md:text-xl font-medium text-brand-white leading-relaxed mb-8 opacity-95 max-w-2xl">
                            {t('projects.description')}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {['React', 'MUI', 'NestJS', 'Mercado Pago API', 'TypeScript', 'Firestore', 'Docker', 'SaaS'].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-brand-white neo-badge px-5 py-2 text-sm md:text-base font-bold text-brand-black"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="https://www.meuniver.online/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-yellow neo-btn py-4 px-8 text-base md:text-lg inline-flex flex-row items-center justify-center gap-3 w-full md:w-auto hover:bg-brand-cyan transition-colors"
                        >
                            {t('projects.btn_view')}
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>

                    <div className="flex-1 w-full flex items-center justify-center mt-6 md:mt-0">
                        <div className="w-full aspect-video rounded-3xl bg-brand-cyan border-4 border-brand-black flex items-center justify-center shadow-[8px_8px_0_#1A1A1A] relative overflow-hidden group cursor-pointer hover:-translate-y-2 hover:shadow-[12px_12px_0_#1A1A1A] transition-all duration-300">
                            <Image
                                src={meuNiverImg}
                                alt="Meu Niver Online"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 md:bottom-4 md:right-4 md:top-auto bg-brand-yellow neo-badge px-4 py-1 text-sm md:text-base font-bold text-brand-black z-10">
                                {t('projects.badge_production')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
