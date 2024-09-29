import '../styles/global.scss';
import Layout from '../components/layout';
import { AnimatePresence } from 'framer-motion';
import HomeSection from '../components/home';
import BioSection from '../components/bio';
import BookSection from '../components/book';
import ContactSection from '../components/contact';
import VideoSection from '../components/video';
import { useRef, useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
    const [activeSection, setActiveSection] = useState('Home');
    const [previousSection, setPreviousSection] = useState('Home');
    const [showPlayer, setShowPlayer] = useState(false);
    const homeRef = useRef(null);
    const bioRef = useRef(null);
    const bookRef = useRef(null);
    const contactRef = useRef(null);
    const videoRef = useRef(null);

    const sections = [
        { label: 'Home', href: '#home', ref: homeRef, Component: HomeSection, background: '/images/background-paysage.jpg' },
        { label: 'Bio', href: '#bio', ref: bioRef, Component: BioSection, background: '/images/superadobe-forest.webp' },
        { label: 'Book', href: '#book', ref: bookRef, Component: BookSection, background: '/images/superadobe-fort.webp' },
        { label: 'Video', href: '#video', ref: videoRef, Component: VideoSection, background: '/images/video-background.jpg' },
        { label: 'Contact', href: '#contact', ref: contactRef, Component: ContactSection, background: '/images/superadobe-drone.webp' },
    ];

    const scrollToSection = (sectionLabel) => {
        const section = sections.find(s => s.label === sectionLabel);
        if (section && section.ref.current) {
            section.ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const togglePlayer = () => {
        setShowPlayer(!showPlayer);
    };

    const [currentBackground, setCurrentBackground] = useState(sections[0].background);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newActiveSection = activeSection;

            sections.forEach(({ label, ref, background }) => {
                if (ref.current && scrollPosition >= ref.current.offsetTop - window.innerHeight / 2) {
                    newActiveSection = label;
                    setCurrentBackground(background);
                }
            });

            if (newActiveSection !== activeSection) {
                setPreviousSection(activeSection);
                setActiveSection(newActiveSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, activeSection]);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${currentBackground})`;
    }, [currentBackground]);

    return (
        <Layout 
            sections={sections} 
            fixedNavigation={true} 
            activeSection={activeSection} 
            scrollToSection={scrollToSection}
            showPlayer={showPlayer}
            togglePlayer={togglePlayer}
        >
            <AnimatePresence mode="wait" initial={false}>
                <Component
                    {...pageProps}
                    key={router.pathname}
                    sections={sections}
                    activeSection={activeSection}
                    previousSection={previousSection}
                    scrollToSection={scrollToSection}
                    showPlayer={showPlayer}
                    togglePlayer={togglePlayer}
                />
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;