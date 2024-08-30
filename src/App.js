import Card from './components/card';
import Input from './components/input';
import Button from './components/Button';
import './App.css';
import { useWeather } from './context/weather';
import { useEffect } from 'react';

function App() {
  const weather= useWeather();
  console.log(weather);

  useEffect(()=>{
    weather.fetchCurrentUserLocationData()
  },[]);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
