import produce from "immer";
import {
  GET_TICKER_POKEMON_API,
  GET_TICKER_POKEMON_API_SUCCESS,
  GET_TICKER_POKEMON_API_ERROR,
} from "./constants";

// The initial state of the main-page
export const initialState = {
  loading: false,
  error: false,
  pokemonName: "",
  pokemonDetails: {
    img: "",
    name: "",
    weight: "",
    height: "",
    colors: "",
    favorite: false,
  },
  favoriteList: [],
};

const pokemonDetailsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case GET_TICKER_POKEMON_API:
        draft.loading = true;
        draft.error = false;
        draft.pokemonName = action.pokemonName;
        break;
      case GET_TICKER_POKEMON_API_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.pokemonDetails = {
          ...draft.pokemonDetails,
          img: action.response && action.response.sprites.front_default,
          name: action.response && action.response.name,
          weight: action.response && action.response.weight,
          height: action.response && action.response.height,
          colors: action.response && action.response.colors,
        };
        break;
      case GET_TICKER_POKEMON_API_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default pokemonDetailsReducer;
