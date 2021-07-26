import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Temp from "./Temp";
import Condition from "./Condition";
import { motion } from "framer-motion";

const Weathercard = ({ temp, condition, city, country, getWeather, bg }) => {
  //const temp = 30;

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    //Framer moition library for animation
    //From of card
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location city={city} country={country} getWeather={getWeather} />
        <Icon condition={condition} />
        <Temp temp={temp} />
        <Condition condition={condition} />
      </Card>
    </motion.div>
  );
};

export default Weathercard;
