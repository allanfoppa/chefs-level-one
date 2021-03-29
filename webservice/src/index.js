const express = require('express')
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes/index.js')

const app = express()

app.use(cors())
app.use(routes)
app.use('/images', express.static(__dirname + '/uploads'))
app.use(express.json())

app.get('/', function (req, res) {
	res.send('Tudo certo!');
});

let port = process.env.PORT;

if (port == null || port == "") {
	port = 3333;
}

app.listen(port);