import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesProvider from "contexts/Favorites";
import Home from "./pages/Home";
import Favorites from "pages/Favorites";
import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import Player from "pages/Player";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/:id" element={<Player />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;

// rotas também imprimem elementos comuns a todas as páginas