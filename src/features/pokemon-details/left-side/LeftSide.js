import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Col, Row, Image } from "antd";
import Button from "./../../../core/components/button";
export default function LeftSide(props) {
  const { pokemonDetails } = props.state;
  return (
    <Row justify="center">
      <Col span={24} key={pokemonDetails.name} style={{ textAlign: "center" }}>
        <Image width={200} src={pokemonDetails.img} />
      </Col>
    </Row>
  );
}
