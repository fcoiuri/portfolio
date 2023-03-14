import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Aos.init({
      easing: 'ease',
      // once: true,
      offset: 120
    });
  }, []);
  return <Component {...pageProps} />;
}
