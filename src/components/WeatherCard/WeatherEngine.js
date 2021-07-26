import React, { useState, useEffect } from "react";
import Weathercard from "./Component";
import { PulseLoader } from "react-spinners";
import ReactCardFlip from "react-card-flip";
import Time from "./Time.js";
import styled from "@emotion/styled";

const WeatherEngine = ({ location }) => {
  //State defines a state that the app will be in
  //Using these states we can switch between states depending on the user
  //This enhances the user's experience
  //Setting a state triggers a re-render

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
    time: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=db0e5df3d207749c6a2fb2acac29c660`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        condition: resJSON.weather[0].main,
        city: resJSON.name,
        country: resJSON.sys.country,
        timeZone: resJSON.timezone,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //Use effect can be used to set a default value of a state
  useEffect(() => {
    getWeather(location);
  }, [location]);

  const bg = BackGround(weather.temp);

  const Button0 = styled.button`
    padding: 5px;
    margin-top: 10px;
    font-size: 1.5rem;
    font-family: "Digital-7";
    cursor: pointer;
    color: white;
    background: ${bg};
    border-radius: 15px;
    border: none;
    &:hover {
      color: black;
    }
  `;

  //Conditional rendering
  if (error) {
    return (
      <div style={{ padding: "10px" }}>
        <Error>
          There has been an Error! <br />
          <Button1 onClick={() => setError(false)}>Reset</Button1>
        </Error>
      </div>
    );
  } else if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader size={15} color="purple" />
      </div>
    );
  }
  return (
    //Conditional rendering if{!loading && !error?} the colon is like an else
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card style={{ padding: "10px" }}>
        <Weathercard
          temp={weather.temp}
          condition={weather.condition}
          city={weather.city}
          country={weather.country}
          getWeather={getWeather}
          bg={bg}
        />
        <Button0 onClick={() => setIsFlipped(!isFlipped)}>TIME</Button0>
      </Card>

      <Card style={{ padding: "10px" }}>
        <Time
          timeZone={weather.timeZone}
          city={weather.city}
          getWeather={getWeather}
        />
        <Button1 onClick={() => setIsFlipped(!isFlipped)}>Weather</Button1>
      </Card>
    </ReactCardFlip>
  );
};

export default WeatherEngine;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackGround = (temp) => {
  let highTemp = 0;
  let lowTemp = 0;
  let bg = null;

  if (temp > 12) {
    //Hot Weather
    highTemp = (1 - (temp - 12) / 28) * 255;
    lowTemp = highTemp - 150;
    bg = `linear-gradient(to top, rgb(255, ${highTemp}, 0), rgb(255, ${Math.abs(
      lowTemp
    )}, 0));`;
  } else if (temp <= 12) {
    //Cold Weather
    highTemp = (1 - (temp + 20) / 32) * 255;
    lowTemp = highTemp - 150;
    bg = `linear-gradient(to top, rgb(0, ${highTemp}, 255), rgb(0, ${Math.abs(
      lowTemp
    )}, 255));`;
  }
  return bg;
};

const Button1 = styled.button`
  padding: 5px;
  margin-top: 10px;
  font-size: 1.5rem;
  font-family: "Digital-7";
  cursor: pointer;
  color: white;
  background: black;
  border-radius: 15px;
  border: 2px solid green;
  &:hover {
    color: red;
    border: 2px solid white;
  }
`;

const Error = styled.div`
  background: red;
  border: 3px solid green;
  color: black;
  font-family: "Digital-7", sans-serif;
  font-size: 1.5em;
  width: 200px;
  height: 240px;
  border-radius: 15px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
