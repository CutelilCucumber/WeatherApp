export function updateLoc(location) {
    location = location.charAt(0).toUpperCase() + location.slice(1);
    document.getElementById('resolvedLoc').textContent = 'Resolved City: ' + location;
}

export function updateWeatherDisplay(currentConditions, dailyData) {

}