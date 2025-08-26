
const fetchButt = document.querySelector('button');
const cityInput = document.querySelector('input');

//function to take location and return weather data
async function getWeather(location){//call asycn function for await fetch

    try {//try method to test for invalid response
        //use await to assign fetch promise to var
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Portland?key=7776AA8FBBF6VLG9ZUASC8QK5', {mode: 'cors'});
        //use await to assign .json method promise to var
        const weatherData = await response.json();
        return weatherData;
    }
    catch (error) {//catch errors and return it
        console.error(error);
        return error;
    }
}

console.log(getWeather());