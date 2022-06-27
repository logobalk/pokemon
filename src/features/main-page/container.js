import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { loadRepos } from "./actions";

import MainPage from "./MainPage";

const mapStateToProps = (state) => ({
    loading: state.main.userData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadRepos,
      push,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
