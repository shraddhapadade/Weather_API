const baseURL = "https://api.weatherapi.com/v1/current.json?key=c5bf3b3ebafa488d805150613242408"

// using city
export const getWeatherDataForCity =async(city) =>{
    // call api
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
};

// using latutude and lognitude
export const getWeatherDataForLocation =async(lat,lon) =>{
    // call api
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
};