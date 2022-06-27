import { all } from 'redux-saga/effects';
import { mainPageSaga } from './features/main-page';
import { pokemonDetailsSaga } from './features/pokemon-details';

export default function* sagas() {
  yield all([mainPageSaga(), pokemonDetailsSaga()]);
}
