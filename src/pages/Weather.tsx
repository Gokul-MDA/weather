import { useState, useEffect } from "react";
import Card from "../components/CardView";
import Forecast from "../components/Forecast";
import Search from "../components/Search";
import { axiosClient } from "../utils/api";

const Weather = () => {
  interface IParams {
    q: string;
    days: string;
  }

  const [query, setQuery] = useState<string>("chennai");
  const [current, setCurrent] = useState<object>();
  const [forecast, setForecast] = useState<Array<[]>>([]);
  const [location, setLocation] = useState<object>();
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = () => {
    const params: IParams = {
      q: query,
      days: "5",
    };
    axiosClient.get("/forecast.json", { params }).then((response) => {
      setCurrent(response.data.current);
      setForecast(response.data.forecast.forecastday);
      setLocation(response.data.location);
    });
  };

  return (
    <>
      <div className="header">
        <h2>Weather App</h2>
      </div>
      <Search query={query} setQuery={setQuery} getWeather={getWeather} />
      <Card current={current} location={location} />
      <Forecast forecast={forecast} />
      <div className="footer">
        <h4> &copy; Sample Corporation</h4>
      </div>
    </>
  );
};

export default Weather;
