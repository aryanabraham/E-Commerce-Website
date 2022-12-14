import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  transition: 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 275px;
  height: 275px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
    background-color: #${(props) => props.color};
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon color="19CF41">
          <AddShoppingCartOutlined />
        </Icon>
        <Icon color="0091FF">
          <SearchOutlined />
        </Icon>
        <Icon color="FF00A6">
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
