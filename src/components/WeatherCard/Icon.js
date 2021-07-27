import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  let image = `./img/${condition}.png`;
  const Icon = styled.img`
    height: 20%;
    width: 30%;
    font-family: "Fira Sans", sans-serif;
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
  `;

  return <Icon src={image} alt="Weather Icon" />;
};

export default Icon;
