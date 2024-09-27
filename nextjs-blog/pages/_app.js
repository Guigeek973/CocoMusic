import '../styles/global.scss';
import Layout from '../components/layout';
import { AnimatePresence } from 'framer-motion';
import HomeSection from '../components/home';
import BlogSection from '../components/book';
import MusicSection from '../components/music';
import ContactSection from '../components/contact';
import { useRef, useState, useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
    const [activeSection, setActiveSection] = useState('Home');
    const [previousSection, setPreviousSection] = useState('Home');
    const homeRef = useRef(null);
    const blogRef = useRef(null);
    const musicRef = useRef(null);
    const contactRef = useRef(null);

    const sections = [
        { label: 'Home', href: '#home', ref: homeRef, Component: HomeSection, background: '/images/background-paysage.jpg' },
        { label: 'Blog', href: '#book', ref: blogRef, Component: BlogSection, background: '/images/superadobe-forest.webp' },
        { label: 'Music', href: '#music', ref: musicRef, Component: MusicSection, background: '/images/superadobe-fort.webp' },
        { label: 'Contact', href: '#contact', ref: contactRef, Component: ContactSection, background: '/images/superadobe-drone.webp' },
    ];

    const scrollToSection = (sectionLabel) => {
        const section = sections.find(s => s.label === sectionLabel);
        if (section && section.ref.current) {
            section.ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Set initial background
        document.body.style.backgroundImage = `url(${sections[0].background})`;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newActiveSection = activeSection;

            sections.forEach(({ label, ref, background }) => {
                if (ref.current && scrollPosition >= ref.current.offsetTop - window.innerHeight / 2) {
                    newActiveSection = label;
                    document.body.style.backgroundImage = `url(${background})`;
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

    return (
        <Layout sections={sections} fixedNavigation={true} activeSection={activeSection} scrollToSection={scrollToSection}>
            <AnimatePresence mode="wait" initial={false}>
                <Component
                    {...pageProps}
                    key={router.pathname}
                    sections={sections}
                    activeSection={activeSection}
                    previousSection={previousSection}
                />
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;