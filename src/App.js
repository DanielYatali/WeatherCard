import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherCard/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Trinidad and Tobago, tt" />
      <WeatherEngine location="Antarctica" />
      <WeatherEngine location="Sydney, au" />
    </div>
  );
}
export default App;
