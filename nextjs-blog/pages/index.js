import { motion } from "framer-motion";
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import AudioPlayer from '../components/AudioPlayer';
import Layout from '../components/layout';

export default function Home({ sections, activeSection, previousSection, scrollToSection }) {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  const closePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <>
      <Layout
        sections={sections}
        fixedNavigation={true}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        togglePlayer={togglePlayer}
        showPlayer={showPlayer}
      >
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
      </Layout>
      {showPlayer && <AudioPlayer onClose={closePlayer} />}
    </>
  );
}
