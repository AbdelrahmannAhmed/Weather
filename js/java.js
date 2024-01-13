var enteredData = document.getElementById('location')
var linkApi = 'https://api.weatherapi.com/v1/current.json?key=094553df41934d9fa4c143354241301&q='
var searchValue
var response
var response2



enteredData.addEventListener('keyup', function () {

    searchValue = linkApi + enteredData.value
    getData()
    showData()
    showData2()

})


async function getData() {

    var weatherData = await fetch(`${searchValue}`)
    response = await weatherData.json()
    var searchValue2 = 'https://api.weatherapi.com/v1/forecast.json?key=094553df41934d9fa4c143354241301&q=' + response.location.name + '&days=7'
    var weatherData = await fetch(`${searchValue2}`)
    response2 = await weatherData.json()
}




function showData() {
    document.getElementById('cityName').innerHTML = response.location.name
    document.getElementById('condition').innerHTML = response.current.condition.text
    document.getElementById('Temp').innerHTML = response.current.temp_c + `<sup>o</sup>c`
    document.getElementById('windDirection').innerHTML = response.current.wind_dir
    document.getElementById('iconImage').src = `https:` + response.current.condition.icon
    document.getElementById('perciptationPercentage').innerHTML = response.current.humidity + `%`
    document.getElementById('windSpeed').innerHTML = response.current.wind_kph + `km/h`

}

function showData2() {
    document.getElementById('day2temphigh').innerHTML = response2.forecast.forecastday[1].day.maxtemp_c + `<sup>o</sup>c`
    document.getElementById('day2templow').innerHTML = response2.forecast.forecastday[1].day.mintemp_c + `<sup>o</sup>c`
    document.getElementById('day2condition').innerHTML = response2.forecast.forecastday[1].day.condition.text
    document.getElementById('iconImage2').src = `https:` + response2.forecast.forecastday[1].day.condition.icon
    document.getElementById('day3temphigh').innerHTML = response2.forecast.forecastday[2].day.maxtemp_c + `<sup>o</sup>c`
    document.getElementById('day3templow').innerHTML = response2.forecast.forecastday[2].day.mintemp_c + `<sup>o</sup>c`
    document.getElementById('iconImage3').src = `https:` + response2.forecast.forecastday[2].day.condition.icon
    document.getElementById('day3condition').innerHTML = response2.forecast.forecastday[2].day.condition.text

}





