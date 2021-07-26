import React from "react";
import styled from "@emotion/styled";

const Condition = ({ condition }) => {
  const Condition = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;

  return <Condition>{condition}</Condition>;
};

export default Condition;
