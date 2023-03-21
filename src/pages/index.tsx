import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Iuri Mendes | Desenvolvedor Front-End</title>
        <meta
          name='description'
          content='Portfólio do desenvolvedor front-end Iuri Mendes'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
