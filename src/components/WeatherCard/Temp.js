import React from "react";
import Reel from "react-reel";
const Temp1 = ({ temp }) => {
  return (
    <>
      <div style={{ fontSize: "2em" }}>
        <Reel theme={reelStyle} text={`${temp}°C`} />
      </div>
    </>
  );
};

export default Temp1;

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
    fontFamily: "Fira Sans",
  },
};
