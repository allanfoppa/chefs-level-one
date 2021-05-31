import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()

app.use(cors())
app.use(routes)
app.use(express.json())

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use('/images', express.static(path.join(__dirname ,'uploads')));

app.get('/', function (req, res) {
	res.send('Tudo certo!');
});

let port = process.env.PORT;

if (port == null || port == "") {
	port = 3333;
}

app.listen(port);