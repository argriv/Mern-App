const mongoose = require('mongoose')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

const connectDB = async () => {
	const conn = await mongoose.connect(
		`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.sadwlfw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
	);

	console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}


module.exports = connectDB;