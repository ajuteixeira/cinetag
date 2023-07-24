import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.container}>
      <h2>Oops!</h2>
      <p>The content you are looking for was not found :(</p>
    </section>
  )
}

export default NotFound;