import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Time = ({ timeZone, city }) => {
  const date = calcDate(timeZone);
  const timeString = date.toLocaleTimeString();
  const dateString = date.toLocaleDateString();
  // eslint-disable-next-line
  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  //Spilt AM/PM and acutal time
  // eslint-disable-next-line
  let TimeArray = new Array();
  TimeArray = timeString.split(" ");

  //console.log(timeString);
  //console.log(dateString);
  return (
    <div>
      <Card>
        <Location>{city}</Location>

        <CurrentTime>
          <Reel theme={reelStyle} text={`${TimeArray[0]}`} />
          <CurrentDate>{TimeArray[1]}</CurrentDate>
        </CurrentTime>
        <CurrentDate>{dateString}</CurrentDate>
      </Card>
    </div>
  );
};

export default Time;

const Card = styled.div`
  margin: 0 auto;
  background: black;
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  text-align: center;
`;

const CurrentTime = styled.div`
  padding: 10px;
  height: 13%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Digital-7";
  color: black;
  font-size: 1.5rem;
  background-color: pink;
  border-radius: 10px;
  border: 3px solid green;
`;
const calcDate = (timeZone) => {
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let loc = utc + 1000 * timeZone;
  let newDate = new Date(loc);
  return newDate;
};

const CurrentDate = styled.div`
  height: 30%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Digital-7";
  color: white;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 8px;
`;

const Location = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6em;
  padding-top: 3.5px;
  width: 80%;
  height: 30%;
`;
const reelStyle = {
  reel: {
    height: "1.07em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    lineHeight: "0.97",
    justifyContent: "center",
  },
  group: {
    transitionDelay: "0",
    transitionTimingFunction: "ease-in-out",
    transform: "transalate(0,0)",
    height: "1.5em",
  },
  number: {
    height: "1em",
    fontFamily: "Digital-7",
  },
};
