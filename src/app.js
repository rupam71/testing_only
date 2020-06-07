// $ npm i express@4.16.4
// npm i hbs@4.0.1
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(path.join(__dirname, '../public'))
console.log(__dirname)
console.log(__filename)


const app = express()


//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//handelbar setup
//handlebar(hbs) express template engine
// setup hbs engine and views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// if you use app.use()
// you donnt need to write app.get()
// setup static directory to serve
app.use(express.static(publicDirectoryPath))

// sending element
// app.get('', (req,res)=>{
//     res.send('<h1>Hello World</h1>')  
// })



app.get('', (req,res) => {
    res.render('index', {
        title: 'Wheather App',
        name : 'Rupam'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Me',
        name : 'RuTenetpam'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help Me',
        name : 'HelpBoy',
        message : 'Good Boy',
        helpText : 'This is some Helpful Text'
    })
})

app.get('/products', (req,res) => {
    if(!req.query.search) {
        return res.send({
            error : 'You must provide a search term'
        })
    }

    console.log(req.query)
    res.send({
        products: []
    })
})

// app.get('/weather', (req,res)=>{
//     if(!req.query.address) {
//         return res.send ({
//             error : 'You Must Provide An Address'
//         })
//     }

    // Hello

    // res.send([{
    //     forcast : 'Its raining',
    //     location : 'Dhaka' ,
    //     address : req.query.address
    // }])  

//     geocode(req.query.address, (error, {latitude, longitude ,location}={}) =>{
//         if (error) {
//             return res.send({ error })
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return res.send({ error })
//             }


//             res.send({
//                 forecast : forecastData,
//                 location,
//                 address : req.query.address
//             })
//         })
//     })
// })

//404 for /help/${all}
app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404',
        name : 'Rupam',
        errorMessage : 'Help article Not Found'
    })
})

// 404 for all
app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        name : 'Rupam',
        errorMessage : 'Page Not Found'
    })
})




// sending object
// app.get('/help', (req,res)=>{
//     res.send([{
//         name : 'Rupam',
//         age : 5
//     },
//     {
//         name : 'Rupam',
//         age : 5
//     }])  
// })

// app.get('/about', (req,res)=>{
//     res.send('<h1>About Page<h2>')  
// })

// app.get('/whether', (req,res)=>{
//     if(!req,query.address) {
//         return res.send [{
//             error : 'You Must Provide An Address'
//         }]
//     }

//     res.send([{
//         forcast : 'Its raining',
//         location : 'Dhaka'
//     }])  
// })

app.listen(3000, ()=>{
    console.log('Server is up on running at PORT:3000')
})

// after listen work, 
// get will go to browser










