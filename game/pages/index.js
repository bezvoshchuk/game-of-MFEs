import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontends Demo Game</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Battle of microfrontends. Please choose your fighter 🕹️</h1>
      </main>
    </div>
  );
}
