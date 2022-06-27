/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./utils/history";
import mainReducer from "./features/main-page/reducer";
import { pokemonDetailsReducer } from "./features/pokemon-details";
import { pokemonFavoriteReducer } from "./features/pokemon-favorite";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    main: mainReducer,
    pokemon: pokemonDetailsReducer,
    favorite: pokemonFavoriteReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
