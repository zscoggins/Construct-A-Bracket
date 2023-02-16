const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT =  process.env.port || 5010

//Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/app/user', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Bracket API'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/teams', require('./routes/teamRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


