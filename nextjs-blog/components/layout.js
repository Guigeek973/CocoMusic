import { motion } from 'framer-motion';
import SocialIcons from './social-icons';
import NavIcons from './nav-icons';
import styles from '../styles/Home.module.scss';

export default function Layout({ children, sections, fixedNavigation, activeSection, scrollToSection, showPlayer, togglePlayer }) {
  return (
    <motion.div
      className={styles.pageContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={fixedNavigation ? styles.fixedNavigation : ''}>
        <SocialIcons />
        <NavIcons
          sections={sections}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          showPlayer={showPlayer}
          togglePlayer={togglePlayer}
        />
      </div>
      {children}
    </motion.div>
  );
}