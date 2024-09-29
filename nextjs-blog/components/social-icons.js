import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faTwitter, faFacebook, faYoutube, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.scss';

export default function SocialIcons() {
  const socialLinks = [
    { icon: faInstagramSquare, url: 'https://www.instagram.com/coleen_pl' },
    //{ icon: faTwitter, url: 'https://twitter.com/your_twitter' },
    //{ icon: faFacebook, url: 'https://www.facebook.com/your_facebook' },
    { icon: faTiktok, url: 'https://www.tiktok.com/@cococoleen973' },
    { icon: faYoutube, url: 'https://www.youtube.com/@coleenmusiqueoff' },
    { icon: faSpotify, url: 'https://open.spotify.com/intl-fr/artist/4VWJgspjKmKRGfsAqXidTD' },
  ];

  return (
    <div className={`${styles.iconColumn} ${styles.socialIcons}`}>
      {socialLinks.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={icon}
            className={styles.whiteIcon}
          />
        </a>
      ))}
    </div>
  );
}