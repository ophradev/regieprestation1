import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Charger le script Font Awesome
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    
    return () => {
      // Nettoyer lors du démontage
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <title>e-Services Togo - Portail des Prestations Ministérielles</title>
        <meta name="description" content="Accédez facilement aux services des ministères togolais grâce à notre assistant IA disponible 24/7. Simplifiez vos démarches administratives en un clic." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;