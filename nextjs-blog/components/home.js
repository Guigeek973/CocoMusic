import styles from '../styles/Home.module.scss';

export default function HomeSection() {
    return (
        <div className={styles.section}>
            <main className={styles.main}>
                <h1 className={styles.title} style={{display: 'none'}}>Home</h1>
            </main>
        </div>
    );
}