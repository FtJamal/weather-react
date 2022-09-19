import axios from "axios";
import { useState } from "react";
import WeatherCard from "./../weatherCard";
import "./index.css"

let Home = () => {

    const [cityName, setCityName] = useState("");
    const [data, setData] = useState([]);

    // let myNum = 5
    // const [myNum, setMyNum] = useState(5);

    // myNum = 10;
    // setMyNum(10);



    let submitHandler = (e) => {
        e.preventDefault();

        console.log("Im submit");

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=1b1f86b6f3705ad499d7ec76e9fe26c6&units=metric`)
            .then(function (response) {

                console.log("response: ", response);

                setData(response.data.list)
            })
            .catch(function (error) {
                // handle error
                console.log("error in api call: ", error);
            })

    }


    return (
        <div>
            <h1>Weather App Home</h1>
            <br />
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="enter your city name here"
                    required
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setCityName(e.target.value);
                    }}
                />
                <button type="submit">Get Weather</button>
            </form>

            {
            data.map((eachForecast, index) => (

                <WeatherCard
                    key={index}
                    date={eachForecast.dt_txt}
                    temp={eachForecast.main.temp}
                    min={eachForecast.main.temp_min}
                    max={eachForecast.main.temp_max}
                />
            ))
            }

        </div>
    );
}

export default Home;
