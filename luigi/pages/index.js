import Head from 'next/head';
import Luigi from '../components/luigi';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luigi Demo App</title>
        <meta name="description" content="Luigi player for Microfrontends using Module Federation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Luigi />
    </div>
  );
}
