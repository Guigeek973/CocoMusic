import styles from '../styles/Home.module.scss';

export default function HomeSection() {
    return (
        <div className={styles.section}>
            <main className={styles.main}>
                <h1 className={styles.title}>Home</h1>
                <p>Bienvenue sur ma page d'accueil...</p>
            </main>
        </div>
    );
}