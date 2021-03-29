const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
	connectionString: process.env.CONNECTION_STRING
})

pool.on('connect', () => {
	console.log('Connected with database!')
})

module.exports = {
	query: (text, params) => pool.query(text, params),
}