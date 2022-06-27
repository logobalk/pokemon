import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFavoritePokemons } from "./actions";

import PokemonFavorite from "./PokemonFavorite";
import { getTickerPokemonDetails } from "./../pokemon-details/actions";

const mapStateToProps = (state) => ({
  state: state.favorite,
  //   currentPath: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setFavoritePokemons,
      getTickerPokemonDetails,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFavorite);
