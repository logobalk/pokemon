/* eslint-disable import/no-anonymous-default-export */

import {
  take,
  call,
  fork,
  put,
  cancel,
  all,
  select,
  takeEvery,
  delay,
} from "redux-saga/effects";
import { ApiService } from "../../core/services";

import { GET_TICKER_POKEMON_API } from "./constants";

import {
  getTickerPokemonDetailsError,
  getTickerPokemonDetailsSuccess,
} from "./actions";

function callRequestPokemonDetails(pokemonName) {
  const url = ApiService.getApiUrl();
  return ApiService.get(`${url}/api/v2/pokemon/${pokemonName}`);
}
function callRequestPokemonColors(pokemonName) {
  const url = ApiService.getApiUrl();
  return ApiService.get(`${url}/api/v2/pokemon-species/${pokemonName}`);
}

function* callTicker() {
  try {
    const state = yield select((state) => state.pokemon);
    const res = yield call(callRequestPokemonDetails, state.pokemonName);
    const resColors = yield call(callRequestPokemonColors, state.pokemonName);
    const ensureColors = resColors.color;
    yield put(getTickerPokemonDetailsSuccess({ ...res, colors: ensureColors }));
  } catch (error) {
    console.log("callTicker error==>", error);
    yield put(getTickerPokemonDetailsError());
  }
}

function* rootSaga() {
  while (true) {
    yield take(GET_TICKER_POKEMON_API);
    yield call(callTicker);
  }
}

export default function* () {
  yield all([rootSaga()]);
}
