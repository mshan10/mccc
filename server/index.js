const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const email = require('./routes/email')

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production')
    app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/email', email)

app.listen(port, () => console.log(`server running on port ${port}`))
