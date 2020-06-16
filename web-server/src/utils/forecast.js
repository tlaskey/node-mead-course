const request = require('postman-request')
require('dotenv').config()

const forecast = (lat, long, cb) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.FORECAST_KEY}&query=${lat},${long}&units=f`

    request({ url: url, json: true }, (error, response, body) => {
        if (error) {
            cb('Unable to connect to weather service!', undefined)
        }
        else if (body.error) {
            cb('Unable to find location.', undefined)
        }
        else {
            cb(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like it is ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast