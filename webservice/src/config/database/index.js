import pg from 'pg'
import { config } from 'dotenv'

config()

const pool = new pg.Pool({
	connectionString: process.env.CONNECTION_STRING
})

pool.on('connect', () => {
	console.log('Connected with database!')
})

export function query(text, params) { return pool.query(text, params) }