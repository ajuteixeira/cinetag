import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header'
import Title from 'components/Title';

function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Title>
        <h1>A place to store your movies and videos!</h1>
      </Title>
      <Footer />
    </>
  )
}

export default Home;