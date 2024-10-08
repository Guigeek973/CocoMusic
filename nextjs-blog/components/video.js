import styles from '../styles/Home.module.scss';
import YoutubeEmbed from './YoutubeEmbed';

export default function VideoSection() {
  return (
    <div className={styles.section}>
      <main className={styles.main}>
        <h1 className={styles.title} style={{display: 'none'}}>Videos</h1>
        <YoutubeEmbed embedId="-JRL5l9Fdco" />
      </main>
    </div>
  );
}