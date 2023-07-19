import { createContext, useState, useContext } from "react";

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

export function useFavoriteContext() {

  //puxa o contexto dos favoritos retornando os valores de favorite e setFavorite
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.some(item => item.id === newFavorite.id) //verifica se o favorito é repetido, se for, retorna true

    let newList = [...favorite];

    //se não for repetido, adiciona o favorito na nova lista e retorna ela
    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    //se for repetido, retira o item da lista
    newList = favorite.filter((fv) => fv.id !== newFavorite.id);
    return setFavorite(newList);
  }
  return {
    favorite,
    addFavorite
  }
}