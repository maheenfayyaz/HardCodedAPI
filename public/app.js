// import axios from "axios";


window.getWeather = function () {
    let cityName = document.getElementById("city-name").value;
    axios.get(`https://hardcodedapi-production.up.railway.app/weather/${cityName}/`)
        .then(response => {
            console.log(response.data);
            let result = document.getElementById("result");
            result.innerHTML = `
             <div class="card">
                <h2>${response.data.cityName}</h2>
                <p>Temperature: ${response.data.Temperature}°C</p>
                <p>Humidity: ${response.data.Humidity}%</p>
                <p>Wind: ${response.data.Wind} km/h</p>
            </div>
        
        `
        })
        .catch(error => {
            console.error('Error:', error);

            let result = document.getElementById('result');
            result.innerHTML = `
            <div class="card" style=" color: #721c24;">
                <h2>Error</h2>
                <p>City ${cityName} not found</p>
            </div>
        `
        });
}
