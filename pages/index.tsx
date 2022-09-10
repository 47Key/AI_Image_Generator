import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../containers/About';
import Hero from '../containers/Hero';
import Navbar from '../containers/Navbar';
import FAQ from '../containers/FAQ';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stable Diffusion Image Generator</title>
        <meta name="description" content="Stable Diffusion Image Generator" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" as="font" crossOrigin="" type="font" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" as="font" crossOrigin="" type="font" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <FAQ />
      
      <footer className={styles.footer}>
        <p>Made by Key the Dev</p>
      </footer>
    </div>
  )
}

export default Home
