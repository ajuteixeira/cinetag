import { useFavoriteContext } from 'contexts/Favorites';
import styles from './Card.module.css';
import favoriteIcon from './favorite.png';
import unfavoriteIcon from './unfavorite.png'

function Card({ id, title, cover }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const itsFavorite = favorite.some((fav) => fav.id === id);
  const icon = !itsFavorite ? favoriteIcon : unfavoriteIcon;
  return (
    <div className={styles.container}>
      <img src={cover}
        alt={title}
        className={styles.cover} />
      <h2>{title}</h2>
      <img src={icon}
        alt="Favorite film"
        className={styles.favorite}
        onClick={() => {
          addFavorite({ id, title, cover })
        }} />
    </div>
  )
}

export default Card;