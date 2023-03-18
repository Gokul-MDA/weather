import { useState, useEffect } from "react";
import Card from "../components/CardView";
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
    });
  };

  return (
    <>
      <Search query={query} setQuery={setQuery} getWeather={getWeather} />
      <Card current={current} forecast={forecast} />
    </>
  );
};

export default Weather;
