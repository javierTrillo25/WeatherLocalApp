import React from "react";

const Weathercard = ({weather, temperature, isCelsius, ChangeUnit}) => {

return (
        <article className="Card"> 
        <h1> Weather App</h1>
        <h3> {weather.name}, {weather.sys.country}</h3>
    <section className="weatherCard-body">
        <div>
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@4x.png`}alt="" />
        </div>
        <h4> Info</h4>
        <ul className="Card2">
        <li>{weather.weather[0].description}</li>
        <li>Wind Speed: {weather.wind.speed} m/s</li>
        <li>Clouds: {weather.clouds.all} %</li>
        <li>Pressure: {weather.main.pressure} hPa</li>
        </ul>
    </section>

    
    <p>{isCelsius ? `${temperature.celsius} °C`: `${temperature.fahrenheit}°F`} Degrees</p>
    <button className="weatherCard-button" onClick={ChangeUnit}>  Degrees °F/°C </button>
    </article>
    

)
}


export default Weathercard