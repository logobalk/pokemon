import produce from "immer";
import { LOAD_REPOS } from "./constants";

// The initial state of the main-page
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  web3: null,
  lcContracts: null,
  isMetaMaskChange: false,
};

const mainPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;
    }
  });

export default mainPageReducer;
