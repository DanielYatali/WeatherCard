import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]); //run everytime the inputMode changes

  if (inputMode) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Container>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef} //Attach a reference to this element
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </FormElement>
        </Container>
      </motion.div>
    );
  }
  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;
const InputField = styled.input`
  padding: 5px;
  &:focus {
    outline: 0;
  }
  width: 80px;
  background: transparent;
  border: none;
  color: white;
`;
const FormElement = styled.form`
  display: flex;
  position: relative;
  background: grey;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  cursor: pointer;
  padding: 5px;
  background: goldenrod;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
`;
const CancelButton = styled.span`
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
  position: absolute;
  cursor: pointer;
  background: darkblue;
  top: -8px;
  right: -10px;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 0.8rem;
`;

const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6em;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;
const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
