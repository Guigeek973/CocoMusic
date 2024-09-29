import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage, faMusic, faImagePortrait, faVideo, faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';

const iconMap = {
    Home: faHome,
    Bio: faImagePortrait,
    Book: faImage,
    Video: faVideo,
    Contact: faEnvelope,
};

export default function NavIcons({ sections, activeSection, scrollToSection, showPlayer, togglePlayer }) {
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
                onClick={(e) => {
                    e.preventDefault(); // Empêche la propagation de l'événement
                    e.stopPropagation(); // Arrête la propagation de l'événement
                    togglePlayer(); // Appelle la fonction togglePlayer
                }}
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