import styles from './Favorites.module.css';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';

function Favorites() {
  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>My favorites ♥</h1>
      </Title>
      <section className={styles.container}>
        <Card id="1" title="Gato Bonifácio" cover="https://img.freepik.com/psd-gratis/hermoso-gato-retrato-aislado_23-2150186058.jpg" />
      </section>
    </>
  )
}

export default Favorites;