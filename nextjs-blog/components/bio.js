import styles from '../styles/Home.module.scss';

export default function BookSection() {

  return (
    <div className={styles.section}>
      <main className={styles.main}>
        <h1 className={styles.title}>Biography</h1>
        <div className={styles.bioContainer}>
          <p className={styles.pbio}>This journey started when I was just a small-town girl, Sarah Mitchell. Growing up, my love for music was kindled in the local church choir, where I discovered my passion for singing. As time passed, I began to perform at various local events and talent shows, and it was there that I first started to capture the hearts of those who listened.</p>
          <br />
          <p className={styles.pbio}>My music is a reflection of life's myriad experiences - the joys of love, the heartaches of loss, the strength found in resilience, and the beauty of self-discovery. Each song I write is a piece of my soul poured into the lyrics and melodies, and I hope that my music resonates with others, helping them find a connection to their own stories.</p>
          <br />
          <p className={styles.pbio}>With my music, I aim to create a deep, emotional connection with my audience, touching their lives in a meaningful way. The support I've received along this journey has been truly humbling, and I am eagerly looking forward to what the future holds in this beautiful voyage through the world of music.</p>
        </div>
      </main>
    </div>
  );
}