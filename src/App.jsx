import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Weathercard from './components/WeatherCard';

function App() {

  const[weather, setWeather] = useState()
  const [coords, setCoords] = useState ()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState (true)

  const success = (pos) => {
    const newCoords ={
      lat : pos.coords.latitude,
      lon : pos.coords.longitude
    }
    setCoords (newCoords)   ///// setcoords para poder enviar la lan y lon a h1
  }
  
const ChangeUnit= () => {
  setIsCelsius(!isCelsius)

}


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  // peticion de datos a la api del clima

  useEffect(() =>{
    if (coords){
      const API_KEY = "f4d4c60f9eb8f82eb3a394a115e7b3ee"
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}
    `
    axios.get(URL)
        .then(res => {
        const tempKelvin = res.data.main.temp
        const tempCelsius = (tempKelvin -273.15).toFixed(2)
        const tempFah = ((tempCelsius * 9/5) + 32).toFixed(2)
        const newtemp ={
          celsius : tempCelsius,
          fahrenheit : tempFah
        }
        setTemperature(newtemp)
        setWeather(res.data)
      })
        .catch(err=>console.log(err))

    }
  },[coords])

  return (
    <div className="App">
      {
        weather ? (
          <Weathercard weather={weather}
          temperature={temperature}
          ChangeUnit={ChangeUnit}
          isCelsius={isCelsius}
          
          /> ): <p> Loading...</p>
      }
      
    </div>
  )
}

export default App
