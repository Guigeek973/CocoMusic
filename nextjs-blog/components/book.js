import styles from '../styles/Home.module.scss';

export default function BookSection() {

  return (
    <div className={styles.section}>
      <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>
        <p>Voici mes derniers articles de blog...</p>
      </main>
    </div>
  );
}