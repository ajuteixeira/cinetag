import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import BasePage from "pages/BasePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;

// rotas também imprimem elementos comuns a todas as páginas