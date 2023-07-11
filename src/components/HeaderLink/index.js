import { Link } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function HeaderLink({ url, children }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  )
}

export default HeaderLink;