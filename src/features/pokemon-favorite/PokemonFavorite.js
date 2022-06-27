import React from "react";
import PropTypes from "prop-types";
import { Layout, Typography, Row, Col, Alert, Space, Button } from "antd";
export default function PokemonFavorite(props) {
  const { Title } = Typography;
  const { state } = props;

  const onClose = (e, name) => {
    const newFav =
      (state.favoriteList.length > 0 &&
        state.favoriteList.filter((item) => item !== name)) ||
      [];

    props.setFavoritePokemons(newFav);
  };
  const onSearch = (e, value) => {
    props.getTickerPokemonDetails(value);
  };
  return (
    <div>
      <Row justify="center">
        <Col xs={0} md={4}></Col>
        <Col xs={24} md={16}>
          <Title style={{ textTransform: "capitalize" }} level={3}>
            favorite
          </Title>
        </Col>
        <Col xs={0} md={4}></Col>
      </Row>
      {state.favoriteList && state.favoriteList.length > 0 && (
        <React.Fragment>
          <Row justify="center">
            <Col xs={0} md={4}></Col>
            <Col xs={24} md={16}>
              <Row>
                {state.favoriteList &&
                  state.favoriteList.map((item) => (
                    <Col xs={24} md={12} key={item}>
                      {" "}
                      <Alert
                        message={item}
                        type="info"
                        onClick={(e) => onSearch(e, item)}
                        action={
                          <Space direction="vertical">
                            <Button
                              onClick={(e) => onClose(e, item)}
                              size="small"
                              type="danger"
                            >
                              Remove
                            </Button>
                          </Space>
                        }
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col xs={0} md={4}></Col>
          </Row>
        </React.Fragment>
      )}
    </div>
  );
}
