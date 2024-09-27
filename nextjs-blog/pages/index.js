import { motion } from "framer-motion";
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import AudioPlayer from '../components/AudioPlayer';

export default function Home({ sections, activeSection, previousSection, scrollToSection, showPlayer, togglePlayer }) {
  const closePlayer = () => {
    togglePlayer();
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Coleen Bollengier</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {sections.map(({ href, ref, Component, label }) => (
          <motion.section
            key={label}
            ref={ref}
            id={href.slice(1)}
            className={`${styles.section} ${styles[`${label.toLowerCase()}Section`]}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Component activeSection={activeSection} previousSection={previousSection} />
          </motion.section>
        ))}
      </div>
      {showPlayer && <AudioPlayer onClose={closePlayer} />}
    </>
  );
}
