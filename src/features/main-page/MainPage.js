import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import PokemonDetails from "../pokemon-details";
import PokemonFavorite from "./../pokemon-favorite";
export default function MainPage(props) {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      {" "}
      <Layout
        style={{
          backgroundImage: "linear-gradient(to right, #2FA5D5 , #127AA4)",
        }}
      >
        {/* <Header style={{ color: "white" }}>Cryptocurrencies Price</Header> */}

        <Content>
          <PokemonDetails />
        </Content>
        <Footer>
          <PokemonFavorite />
        </Footer>
      </Layout>
    </div>
  );
}
