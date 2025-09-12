import {updateLoc} from "./interface.js";
import { updateWeatherDisplay } from "./interface.js";
const fetchButt = document.querySelector('button');
const cityInput = document.querySelector('input');

//function to take location and return weather data
async function getWeather(){//call asycn function for await fetch
    //vars for storing necessary data

    try {//try method to test for invalid response
        //use await to assign fetch promise to var
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + cityInput.value + '?key=7776AA8FBBF6VLG9ZUASC8QK5', {mode: 'cors'});
        //use await to assign .json method promise to var
        const weatherData = await response.json();

            console.log(weatherData);
        //pass city name to be displayed
        updateLoc(weatherData.address)
        let [currentConditions, dailyData] = extractData(weatherData);
        //weatherdata->extractdata returns necessary data->update display
        document.getElementById('loading').style.display = 'none';
        updateWeatherDisplay(currentConditions, dailyData);

    }
    catch (error) {//catch errors and return it
        console.error(error);
        document.getElementById('loading').style.display = 'none';
        return error;
    }
}

function extractData(weatherData) {
    let dailyData = [];

    class Day {//class constructor for daily forecast
        constructor(datetime, tempmax, tempmin, precip, conditions, icon, uv) {
            this.datetime = datetime;
            this.tempmax = tempmax;
            this.tempmin = tempmin;
            this.precip = precip;
            this.conditions = conditions;
            this.icon = icon;
            this.uv = uv;
            //this.id = crypto.randomUUID();
        }
    }

    for(let i=0 ; i<=14 ; i++){// push each day class into dailydata array
        dailyData.push(new Day(
            weatherData.days[i].datetime,
            weatherData.days[i].tempmax,
            weatherData.days[i].tempmin,
            weatherData.days[i].precip,
            weatherData.days[i].conditions,
            weatherData.days[i].icon,
            weatherData.days[i].uvindex
        ))
    }

    let currentData = {
        temp: weatherData.currentConditions.temp,
        feelslike: weatherData.currentConditions.feelslike,
        humidity: weatherData.currentConditions.humidity,
        conditions: weatherData.description,
        icon: weatherData.currentConditions.icon,
        uv: weatherData.currentConditions.uvindex
    }

    //must return 2 vars
    return [currentData, dailyData];
}

//event listener to call getweather and record the location on button click
fetchButt.addEventListener('click', () => {
    getWeather();
    document.getElementById('loading').style.display = 'block';

    
})
