import { Card, Grid } from "@mui/material";
import { useState } from "react";

interface Iprops {
  forecast: any;
}

const Forecast: React.FC<Iprops> = ({ forecast }) => {
  const [day, setDay] = useState<number>(0);

  return (
    <>
      <Grid container>
        <Grid xs={6}>
          <div className="forecast">
            {forecast?.map((_i: any, index: number) => {
              return (
                <div className={"future"} key={index}>
                  <Card
                    sx={{
                      width: "500px",
                      display: "flex",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                    onClick={() => setDay(index)}
                    className={day == index ? "activeDay" : ""}
                  >
                    <p>Date : {new Date(_i?.date).toDateString()}</p>
                    <img
                      src={_i?.day?.condition?.icon}
                      className="weatherImg"
                    />
                    <p className="weatherRep">{_i?.day?.condition?.text}</p>
                    <p className="rainStatus">
                      Chance for rain : <b>{_i?.day?.daily_chance_of_rain}%</b>
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid xs={6} className="futureReport">
          <Card
            sx={{
              width: "500px",
              height: "350px",
              padding: "20px",
            }}
            className="futureReportCard"
          >
            <p>
              Date : <b>{new Date(forecast[day]?.date).toDateString()}</b>
            </p>
            <Grid container>
              <Grid xs={6}>
                <ul>
                  <li>Sunrise : {forecast[day]?.astro?.sunrise}</li>
                  <hr />
                  <li>Sunset : {forecast[day]?.astro?.sunset}</li>
                  <hr />
                  <li>Average Temperature : {forecast[day]?.day?.avgtemp_c}</li>
                  <hr />
                  <li>Maximum Temperature : {forecast[day]?.day?.maxtemp_c}</li>
                  <hr />
                  <li>Minimum Temperature : {forecast[day]?.day?.mintemp_c}</li>
                  <hr />
                  <li>
                    Chance for Rain : {forecast[day]?.day?.daily_chance_of_rain}
                  </li>
                  <hr />
                  <li>
                    Maximum Wind Speed : {forecast[day]?.day?.maxwind_kph}
                  </li>
                </ul>
              </Grid>
              <Grid
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="cardIcon1">
                  <img src={forecast[day]?.day?.condition?.icon} width="150" />
                  <h3>{forecast[day]?.day?.condition?.text}</h3>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Forecast;
