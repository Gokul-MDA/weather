import { Card } from "@mui/material";

interface IProps {
  current: any;
  forecast: Array<[]>;
}
const CardView: React.FC<IProps> = ({ current, forecast }) => {
  return (
    <div className="cardView">
      <div className="today">
        <Card
          sx={{
            width: "400px",
            height: "300px",
            marginTop: "50px",
            padding: "30px",
            // backgroundColor: "transparent",
            // border: "1px solid black",
          }}
        >
          <h2>
            <b>Today</b>
          </h2>
          <p>last update : {current?.last_updated}</p>
          <div className="cardIcon">
            <img src={current?.condition?.icon} width="150" />
            <h2>
              {current?.temp_c}
              <sup>o</sup>C
            </h2>
          </div>
          <p>{current?.condition?.text}</p>
        </Card>
      </div>
      <div className="forecast">
        {forecast?.map((_i: any) => {
          return (
            <div className="future">
              <Card
                sx={{
                  width: "500px",
                  display: "flex",
                  // backgroundColor: "transparent",
                  // border: "1px solid black",
                  padding: "10px",
                }}
              >
                <p>Date : {_i?.date}</p>
                <img src={_i?.day?.condition?.icon} />
                <p>{_i?.day?.condition?.text}</p>
                <p>Chance for rain : {_i?.day?.daily_chance_of_rain}%</p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardView;
