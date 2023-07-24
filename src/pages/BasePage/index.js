import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/Favorites";
import { Outlet } from "react-router-dom";

function BasePage() {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  )
}

export default BasePage;

// Outlet: Nós colocamos tudo o que existia em comum e usamos o <Outlet>, componente do react-router-dom que nos possibilita criar uma rota pai, correspondendo a todas as rotas filhas que serão encaixadas nessa rota.