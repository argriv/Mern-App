const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()
const app = express()
const connectDB = require('./config/db')
const PORT = process.env.PORT
connectDB()
app.use(
	'/graphql',
	cors(),
	graphqlHTTP({
		schema,
		graphiql: true,
	})
)
app.listen(PORT, () => {
	console.log('server start:' + PORT)
})

