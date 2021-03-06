if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const session = require('express-session')
const projectsRoute = require('./routes/API/projects')
const positionsRoute = require('./routes/API/positions')
const userRoute = require('./routes/API/user')
const linksRoute = require('./routes/API/links')
const PORT = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@lionscave2.jk0ly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layouts/main' })
app.use(morgan('dev'))
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3000/login"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    key: "admin",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 3600000
    }
}))
app.use('/', routes)
app.use('/API', projectsRoute)
app.use('/API', positionsRoute)
app.use('/API', linksRoute)
app.use('/API', userRoute)
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {message: error.message}
    })
})
app.listen(PORT, () => console.log(`Server is running, http://localhost:${PORT}`))