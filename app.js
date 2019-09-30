let request = require('request')

let url = 'https://api.darksky.net/forecast/197c56156adfa1558e99a733ee124388/37.8267,-122.4233?lang=ja'

request({ url: url, json: true }, (err, response) => {
    if (err) {
        console.log('cannot connect to the darksky API.')
    } else if (response.body.error) {
        console.log('unable to find location.')
    } else {
        console.log(response.body.daily.data[0].summary + ` It is currently ${response.body.currently.temperature} degrees out. there is a ${response.body.currently.precipProbability} possibility of rain.`)
    }
})

//geocoding
//adrress -> lat/long -> weather
let geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/kathmandu.json?access_token=pk.eyJ1IjoiYXJwaXRqcyIsImEiOiJjazE1dWsxbzQweXc0M2xxZGtreHloZmZpIn0.ZsPq84XxmY1s6vOC_D-yxw&limit=1'
request({ url: geoCodeUrl, json: true }, (err, response) => {
    if (err) {
        console.log('cannot connect to the mapbox API.')
    } else if(response.body.features.length === 0) {
            console.log('no such place exists.')
    } 
    else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(`the longitude and latitude of ${response.body.features[0].text} are ${latitude} and ${longitude} respectively.`)
    }

})