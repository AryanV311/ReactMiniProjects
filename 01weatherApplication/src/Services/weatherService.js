// /* eslint-disable no-undef */

// import { DateTime } from "luxon";


// const API_KEY = "08b24dcc4ce3dc9e3f1584b5a1c417d2";
// const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// const getWeatherData = (infotype, searchParams) => {
//     const url = new URL(BASE_URL + infotype);
//     url.search = new URLSearchParams({...searchParams, appid:API_KEY});

//     return fetch(url)
//     .then((res) => res.json())

// }

// const formatToLocalTime = (
//     secs,
//     offset,
//     format = "cccc, dd LLL yyyy' | Local time:'hh:mm a" ) => DateTime.fromSeconds(secs + offset, { zone:"utc"}).toFormat(format);


// const formatCurrent = (data) => {
//     console.log(data);
//     const {
//     coord: { lat, lon },
//     main: { temp, feels_tike, temp_min, temp_max, humidity},
//     name,
//     dt,
//     sys: { country, sunrise, sunset },
//     weather ,
//     wind: { speed },
//     timezone,
//     } = data;

//     const {main: details, icon } = weather[0];
//     const formattedLocalTime = formatToLocalTime(dt, timezone)

//     return {
//         temp, feels_tike, temp_min, temp_max, humidity, name, country, sunrise: formatToLocalTime{sunrise, timezone, 'hh:mm a'},
//         sunset: formatToLocalTime{ sunset, timezone, 'hh:mm a'}
//     };
// };


//     const getFormattedWeatherData = async(searchParams) => {
//         const formattedCurrentWetaher = await getWeatherData(
//             "weather",
//             searchParams
//         ).then(formatCurrent)

//         return {... formattedCurrentWetaher}
//     }
    


// export default getFormattedWeatherData;