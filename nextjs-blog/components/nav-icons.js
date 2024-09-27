import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faMusic, faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';

const iconMap = {
    Home: faHome,
    Blog: faBook,
    Music: faMusic,
    Contact: faEnvelope,
};

export default function NavIcons({ sections, activeSection, scrollToSection, togglePlayer, showPlayer }) {
    return (
        <div className={`${styles.iconColumn} ${styles.navIcons}`}>
            {sections.map(({ label, href }) => (
                <motion.div
                    key={label}
                    animate={{
                        scale: activeSection === label ? 1.3 : 1,
                        color: activeSection === label ? '#007bff' : 'white'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <FontAwesomeIcon
                        icon={iconMap[label]}
                        className={`${styles.whiteIcon} ${activeSection === label ? styles.activeIcon : ''}`}
                        title={label}
                        onClick={() => scrollToSection(label)}
                    />
                </motion.div>
            ))}
            <motion.div
                animate={{
                    scale: showPlayer ? [1, 1.2, 1] : 1,
                    color: showPlayer ? '#00ff00' : 'white',
                }}
                transition={{
                    duration: 0.5,
                    repeat: showPlayer ? Infinity : 0,
                    repeatType: "reverse"
                }}
                onClick={togglePlayer}
            >
                <FontAwesomeIcon
                    icon={faPlay}
                    className={styles.whiteIcon}
                    title="Play Music"
                />
            </motion.div>
        </div>
    );
}