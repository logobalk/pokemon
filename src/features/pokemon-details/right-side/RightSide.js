import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Typography, Row, Col, Button, Tooltip, Tag } from "antd";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
export default function RightSide(props) {
  const [isFavorite, setCurrentFavorite] = useState(false);
  const { Meta } = Card;
  const { pokemonDetails } = props.state;
  const { Title } = Typography;

  useEffect(() => {
    const ensureIsFavorite =
      props.favoriteList.length > 0 &&
      props.favoriteList.find((item) => pokemonDetails.name === item);
    setCurrentFavorite(ensureIsFavorite ? true : false);
  }, [props.favoriteList, props.pokemonDetails]);

  return (
    <React.Fragment>
      <Row>
        <Col span={20}>
          <Title style={{ textTransform: "capitalize" }} level={2}>
            {pokemonDetails.name}
          </Title>
        </Col>
        <Col span={4}>
          <Tooltip title="Favorite">
            <Button
              shape="circle"
              onClick={() => props.setFavorite(isFavorite, pokemonDetails.name)}
              icon={
                isFavorite ? (
                  <StarFilled style={{ color: "#FFCB05" }} />
                ) : (
                  <StarOutlined />
                )
              }
            />
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <p level={5}>
            Weight
            <br />
            {pokemonDetails.weight} kg
          </p>
        </Col>
        <Col span={12}>
          <p level={5}>
            Height
            <br />
            {pokemonDetails.height} cm
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          Color
          <br />
          <Tag color={pokemonDetails.colors.name}>
            {pokemonDetails.colors.name}
          </Tag>
        </Col>
      </Row>
    </React.Fragment>
  );
}
