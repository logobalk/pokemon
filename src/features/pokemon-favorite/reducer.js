import produce from "immer";
import { SET_FAVORITE_POKEMONS } from "./constants";

// The initial state of the main-page
export const initialState = {
  favoriteList: [],
};

const pokemonDetailsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_FAVORITE_POKEMONS:
        draft.favoriteList = action.favoriteList;
        break;
    }
  });

export default pokemonDetailsReducer;
