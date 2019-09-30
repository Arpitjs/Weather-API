let request = require('request')

let forecast = (language, latitude, longitude, cb) => {
    let url = `https://api.darksky.net/forecast/197c56156adfa1558e99a733ee124388/${latitude},${longitude}?${language}&units=si`
    request({ url: url, json: true }, (err, response) => {
        if(err) {
            cb('cannot connect to the darksky API.')
        } else if(response.body.error) {
            cb('cannot find forecast of that location.')
        } else {
            cb(null, console.log(`${response.body.daily.data[0].summary} The temeperature is ${response.body.currently.temperature} and there is ${response.body.currently.precipProbability} chance of rain.`))
        }
    })
}

module.exports = forecast

