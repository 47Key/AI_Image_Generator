import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import About from "../containers/About";
import Hero from "../containers/Hero";
import Navbar from "../containers/Navbar";
import FAQ from "../containers/FAQ";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="bg-mainBG bg-cover bg-no-repeat bg-left sm:bg-center sm:bg-fixed sm:-mt-32 lg:-mt-12 m-0 p-0">
        <Head>
          <title>Stable Diffusion Image Generator</title>
          <meta name="description" content="Key AI" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
            as="font"
            crossOrigin=""
            type="font"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap"
            as="font"
            crossOrigin=""
            type="font"
          />
        </Head>

        <Hero />
        <About />
        <FAQ />
        <Navbar />

        <footer className={styles.footer}>
          <div className="flex flex-row w-screen h-full justify-center items-center">
            <p className="px-5">Made by Key the Dev</p>
            <Link href="https://github.com/47Key/key_stable-diffusion">
              <Image
                className="cursor-pointer" 
                alt="47Key Github Logo"
                width={30}
                height={30}
                src="/github.svg"
              />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
