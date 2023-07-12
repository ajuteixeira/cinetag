import styles from './Card.module.css';
import favoriteIcon from './favorite.png';

function Card({ id, title, cover }) {
  return (
    <div className={styles.container}>
      <img src={cover}
        alt={title}
        className={styles.cover} />
      <h2>{title}</h2>
      <img src={favoriteIcon}
        alt="Favorite film"
        className={styles.favorite} />
    </div>
  )
}

export default Card;