const express = require('express')
const app = express()
const port = 80
const cookieParser = require('cookie-parser');
app.use(express.static('public'));
app.use(cookieParser());
app.listen(port, () => {
    console.log(`Application login page at http://localhost:${port}`)
})