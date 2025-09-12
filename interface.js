export function updateLoc(location) {
    location = location.charAt(0).toUpperCase() + location.slice(1);
    document.getElementById('resolvedLoc').textContent = 'Resolved Location: ' + location;
}

export function updateWeatherDisplay(currentConditions, dailyData) {
    document.getElementById('overview').textContent = currentConditions.conditions;
    document.getElementById('currConditions').textContent = dailyData[0].conditions;
    document.getElementById('currIcon').src = './assets/'+currentConditions.icon+'.svg';
    document.getElementById('currTemp').textContent = currentConditions.temp+'°F';
    document.getElementById('currFeelslike').textContent ='Feels Like: '+currentConditions.feelslike+'°F';
    document.getElementById('currHumidity').textContent ='Humidity: '+currentConditions.humidity+'%';
    document.getElementById('currUV').textContent ='UV: '+currentConditions.uv;
    document.getElementById('currPrecipitation').textContent = 'Precipitation: '+dailyData[0].precip+'%';
    
    document.getElementById('loadedInfo').style.display = 'block';

}