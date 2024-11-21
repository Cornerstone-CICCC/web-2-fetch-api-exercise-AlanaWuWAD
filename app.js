let body = document.querySelector('body')
async function getData(){
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    const data = await response.json()
    const weather = data.current.temperature_2m
    const weatherUnit = data.current_units.temperature_2m
    const windSpeed = data.current.wind_speed_10m
    const windUnit = data.current_units.wind_speed_10m
    const time = new Date(data.current.time)

    let weatherHtml=`
    <h1>Today's Weather</h1>
    <div>${weather} ${weatherUnit}</div>
    <h3>Wind speed: ${windSpeed} ${windUnit}</h3>
    <div class="city"><strong>${data.timezone}</strong></div>
    <h3>Last updat: ${time.toLocaleDateString()} ${time.toLocaleTimeString()}</h3>
`
    body.innerHTML = weatherHtml
}
getData()


    
    