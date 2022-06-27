import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Empty, Spin, Row, Col, Card, Typography } from "antd";
import View from "../../core/components/view";
import LeftSide from "./left-side";
import SearchCriteria from "./../../core/components/search-criteria/SearchCriteria";
import RightSide from "./right-side";
export default function PokemonDetails(props) {
  const { state, favoriteList } = props;
  const { Title } = Typography;
  const onSearch = (value) => {
    props.getTickerPokemonDetails(value);
  };

  const onChangeFavorite = (isFavorite, name) => {
    if (!isFavorite) {
      const newFav = [...favoriteList, name];
      props.setFavoritePokemons(newFav);
    } else {
      const newFav =
        (favoriteList.length > 0 &&
          favoriteList.filter((item) => item !== name)) ||
        [];
      props.setFavoritePokemons(newFav);
    }
  };

  return (
    <div style={{ height: "85vh", padding: "1em" }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={2} style={{ padding: "3em" }}>
            Pokemon
          </Title>
        </Col>
        <Card>
          <Row>
            <Col span={24}>
              <SearchCriteria onSearch={onSearch} />
            </Col>
            <Col span={24}>
              <Spin tip="Loading..." spinning={state.loading}>
                {state.pokemonDetails && state.pokemonDetails.name ? (
                  <Row>
                    <Col md={12} xs={24}>
                      <View>
                        <LeftSide state={state} />
                      </View>
                    </Col>
                    <Col md={12} xs={24}>
                      <div>
                        <View>
                          <RightSide
                            setFavorite={(isFavorite, name) =>
                              onChangeFavorite(isFavorite, name)
                            }
                            pokemonDetails={state.pokemonDetails}
                            favoriteList={favoriteList}
                            state={state}
                          />
                        </View>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <React.Fragment>
                    {state.error ? (
                      <div>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                      </div>
                    ) : (
                      <Title level={4} style={{ padding: "3em" }}>
                        Try search for Pokemon by their name
                      </Title>
                    )}
                  </React.Fragment>
                )}
              </Spin>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
}
