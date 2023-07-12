import Header from 'components/Header'
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import Footer from 'components/Footer';
import videos from 'json/db.json';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Title>
        <h1>A place to store your movies and videos!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
      <Footer />
    </>
  )
}

export default Home;