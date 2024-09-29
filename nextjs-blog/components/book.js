import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import styles from '../styles/Home.module.scss';

export default function MusicSection() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const items = [
    {
      title: "Image 1",
      image: './images/background-paysage.jpg',
    },
    {
      title: "Image 2",
      image: './images/superadobe-drone.webp',
    },
    {
      title: "Image 3",
      image: './images/superadobe-fort.webp',
    }
  ];

  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className={styles.section}>
      <main className={styles.main}>
        <div className={styles.carouselContainer}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item) => {
              return (
                <motion.div
                  className={styles.card}
                  key={item.title}
                  layout
                  custom={{
                    direction,
                    position: () => {
                      if (item === visibleItems[0]) {
                        return "left";
                      } else if (item === visibleItems[1]) {
                        return "center";
                      } else {
                        return "right";
                      }
                    }
                  }}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1 }}
                >
                  <img src={item.image} alt={item.title} />
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div className={styles.carouselButtons}>
            <motion.button
              className={`${styles.carouselButton} ${styles.leftButton}`}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleClick(-1)}
            >
              ◀︎
            </motion.button>
            <motion.button
              className={`${styles.carouselButton} ${styles.rightButton}`}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleClick(1)}
            >
              ▶︎
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  }
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2
  };
  return indexes[position()];
}