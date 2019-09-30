let forecast = require('./utils/forecast')
let geoCodes = require('./utils/geocode')

let command = process.argv[2]
if(command) {
geoCodes(command, (err, done) => {
    if (err) {
        return console.log(err)
    }
    console.log(`the longitude and latitude of ${done.location} are ${done.latitude} and ${done.longitude} respectively.`)
    forecast('lang=en', done.latitude, done.longitude, (err, done) => {
        if (err) {
            return console.log(err)
        }
    })
})
} else {
    console.log('please enter an address!')
}
//input for forecast comes from output of geocode
//nepal ko long and lat is sent as input to forecast so the forecast that gets printed will be of nepal. mind blowing stuff.
