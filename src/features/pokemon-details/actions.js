import {
  GET_TICKER_POKEMON_API,
  GET_TICKER_POKEMON_API_SUCCESS,
  GET_TICKER_POKEMON_API_ERROR,
} from "./constants";

export function getTickerPokemonDetails(pokemonName) {
  console.log("valuesss===>", pokemonName);
  return {
    type: GET_TICKER_POKEMON_API,
    pokemonName,
  };
}

export function getTickerPokemonDetailsSuccess(response) {
  return {
    type: GET_TICKER_POKEMON_API_SUCCESS,
    response,
  };
}
export function getTickerPokemonDetailsError() {
  return {
    type: GET_TICKER_POKEMON_API_ERROR,
  };
}
