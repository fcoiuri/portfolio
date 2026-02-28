import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta
          name='description'
          content={t('head.description')}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
