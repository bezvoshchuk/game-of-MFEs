import Head from 'next/head';
import Mario from '../components/mario';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mario Demo App</title>
        <meta name="description" content="Mario player for Microfrontends using Module Federation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Mario />
    </div>
  );
}
