import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Iuri Mendes | Desenvolvedor de software</title>
        <meta
          name='description'
          content='Portfólio do desenvolvedor de software Iuri Mendes'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
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
