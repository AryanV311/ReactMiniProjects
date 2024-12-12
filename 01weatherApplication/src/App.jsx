

import TopButton from "../../01weatherApplication/src/components/TopButton"
import Input from "./components/Input"
import TimeAndLocation from "./components/TimeAndLocation"
import TeampAndDeatails from "./components/TeampAndDeatails"
import Forecast from "./components/Forecast"
// import getFormattedWeatherData from "./Services/weatherService"



function App() {

  // const  getWeather = async() => {
  //   const data = await getFormattedWeatherData( { q : "berlin"});
  //   console.log(data)

  // }

  // getWeather()

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 text-white'>
      <TopButton />
      <Input />
      <TimeAndLocation/>
      <TeampAndDeatails/>
      <Forecast />
      <Forecast />
    </div>
  )
}

export default App
