import express from "express"
import cors from "cors"

console.log("hello");

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(express.static('public'))

// 172.28.208.1:3000

app.get('/', (req, res) => {
    console.log("Requesting For IP: " ,req.ip);
  res.sendFile('index.html', {root: "public"});
})

app.get('/weather/:cityName', (req, res) => {
  console.log("WeatherApp");
  let weatherData = {
    karachi: {
      cityName :"karachi",
      Temperature: 26,
      Humidity: 56,
      Wind: 32,
    },
    lahore: {
      cityName :"Lahore",
      Temperature: 15,
      Humidity: 85,
      Wind: 11,
    },
    islamabad: {
      cityName :"Islamabad",
      Temperature: 12,
      Humidity: 82,
      Wind: 8,
    },
    peshawar: {
      cityName :"Peshawar",
      Temperature: 11,
      Humidity: 95,
      Wind: 6,
    },    
    punjab: {
      cityName :"Punjab",
      Temperature: 20,
      Humidity: 53,
      Wind: 30,
    },    
    sawat: {
      cityName :"Sawat",
      Temperature: 6,
      Humidity: 85,
      Wind: 3,
    },
  }
  let userInput = req.params.cityName.toLowerCase();
  let weatherDataSend = weatherData[userInput];
  if (weatherDataSend) {
    res.send(weatherDataSend) 
  }
  else{
    res.status(404).send(`Data for ${req.params.cityName} not found`);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})