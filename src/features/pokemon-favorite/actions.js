import { SET_FAVORITE_POKEMONS } from "./constants";

export function setFavoritePokemons(favoriteList) {
  return {
    type: SET_FAVORITE_POKEMONS,
    favoriteList,
  };
}
