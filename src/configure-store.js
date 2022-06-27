import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import createReducer from "./reducers";
import sagas from "./sagas";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: createReducer(initialState),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
