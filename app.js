const express = require('express')
const app  = express()
const port = 3000
app.use(express.static(__dirname + '/ashvocals-frontend'));

app.get('/', ((req, res) => {
    res.sendFile(__dirname +"/ashvocals-frontend/index.html")

}))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})