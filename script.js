
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '11c0aaafd2msh96864b7ae9d8a98p18904bjsn5a27d0e1e0c4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city)=>{
    cityName.innerHTML = city  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}

    // cityName.innerHTML = ""
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        tempM.innerHTML = response.temp
        wind_speedM.innerHTML = response.wind_speed
        humidityM.innerHTML = response.humidity
        min_tempM.innerHTML = response.min_temp
        max_tempM.innerHTML = response.max_temp

    })
    .catch(err => console.error(err));

    // cityName.innerHTML = city  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        tempC.innerHTML = response.temp
        wind_speedC.innerHTML = response.wind_speed
        humidityC.innerHTML = response.humidity
        min_tempC.innerHTML = response.min_temp
        max_tempC.innerHTML = response.max_temp

    })
    .catch(err => console.error(err));

    cityName.innerHTML = city  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kochi', options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        tempKo.innerHTML = response.temp
        wind_speedKo.innerHTML = response.wind_speed
        humidityKo.innerHTML = response.humidity
        min_tempKo.innerHTML = response.min_temp
        max_tempKo.innerHTML = response.max_temp
        

    })
    .catch(err => console.error(err));

    cityName.innerHTML = city  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        tempK.innerHTML = response.temp
        wind_speedK.innerHTML = response.wind_speed
        humidityK.innerHTML = response.humidity
        min_tempK.innerHTML = response.min_temp
        max_tempK.innerHTML = response.max_temp

    })
    .catch(err => console.error(err));


submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")