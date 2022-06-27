import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTickerPokemonDetails } from "./actions";

import PokemonDetails from "./PokemonDetails";
import { setFavoritePokemons } from "./../pokemon-favorite/actions";

const mapStateToProps = (state) => ({
  state: state.pokemon,
  favoriteList: state.favorite.favoriteList,
  //   currentPath: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getTickerPokemonDetails,
      setFavoritePokemons,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
