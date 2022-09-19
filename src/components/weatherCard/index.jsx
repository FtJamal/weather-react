import "./index.css"
import moment from "moment";


function WeatherCard({ date, temp, min, max }) {
  return (
    <div className="main">
    <div className="card">
      <div>{moment(date).format("dddd ha")}</div>
      <h1>{temp}°C</h1>
      <div>{min}°C - {max}°C</div>

    </div>
    </div>
  );
}

export default WeatherCard;
