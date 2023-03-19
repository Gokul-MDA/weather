import { Card, Grid } from "@mui/material";

interface IProps {
  current: any;
  location: any;
}
const CardView: React.FC<IProps> = ({ current, location }) => {
  return (
    <>
      <div className="cardView">
        <div className="today">
          <h2 className="city">{location?.name}</h2>
          <Card
            sx={{
              width: "600px",
              height: "300px",
              marginTop: "50px",
              padding: "30px",
            }}
          >
            <h2>
              <b>Today</b>
            </h2>
            <p>
              <b>last update :</b>{" "}
              {new Date(current?.last_updated).toDateString()}
            </p>
            <Grid container>
              <Grid xs={6}>
                <div className="cardIcon">
                  <img src={current?.condition?.icon} width="150" />
                  <h2 className="Weatherdeg">
                    {current?.temp_c}
                    <sup>o</sup>C
                  </h2>
                </div>
              </Grid>
              <Grid xs={6}>
                <p>Wind Speed : {current?.wind_kph}</p>
                <p>Wind Direction : {current?.wind_dir}</p>
                <p>Humidity : {current?.humidity}</p>
              </Grid>
            </Grid>
            <p>Condition : {current?.condition?.text}</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardView;
