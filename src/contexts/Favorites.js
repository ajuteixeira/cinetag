import { createContext } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoritesContext.Provider
      value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}