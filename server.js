if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const hbs = require('hbs')
//routes
const routes = require('./routes')
const projectsRoute = require('./routes/API/projects')
const positionsRoute = require('./routes/API/positions')
const linksRoute = require('./routes/API/links')
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layouts/main' })
app.use(bodyParser.json())
app.use('/', routes)
app.use('/API', projectsRoute)
app.use('/API', positionsRoute)
app.use('/API', linksRoute)

app.listen(PORT, () => console.log(`Server is running on :${PORT}`))