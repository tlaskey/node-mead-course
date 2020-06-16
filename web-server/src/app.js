const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Tyler Laskey'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Tyler Laskey'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the help page.',
        title: 'Help',
        name: 'Tyler Laskey'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, data) => {
        if (error) {
            return res.send({
                errorMsg: error
            })
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    errorMsg: error
                })
            }

            res.send({
                forecast: forecastData,
                location: data.location,
                address: req.query.address
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Tyler Laskey'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Tyler Laskey'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})