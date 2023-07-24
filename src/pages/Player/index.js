import Banner from 'components/Banner';
import styles from './Player.module.css';
import Title from 'components/Title';
import videos from 'json/db.json';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';


function Player() {
  const parameters = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parameters.id);
  })

  if (!video) {
    return <NotFound />
  }
  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </>
  )
}

export default Player;