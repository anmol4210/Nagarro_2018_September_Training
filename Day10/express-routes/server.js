const express = require('express')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/vendors', require('./routes/vendors'))
app.use('/products', require('./routes/products'))

app.listen(2525)
