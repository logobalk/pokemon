/* eslint-disable import/no-anonymous-default-export */

import { take, call, fork, put, cancel, all, select } from "redux-saga/effects";

import { LOAD_REPOS } from "./constants";

function* rootSaga() {
  while (true) {
    yield take(LOAD_REPOS);
  }
}

export default function* () {
  yield all([rootSaga()]);
}
