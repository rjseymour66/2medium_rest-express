const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// use the body parser middleware in express
app.use(bodyParser.json()) // accept JSON in the request body
app.use(bodyParser.urlencoded({ extended: false })) // accept url encoded data (normally found in forms)

// routing to index.js file in the routes folder
app.use('/', require('./routes/index'))



app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
})