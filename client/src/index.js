import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '@coreui/coreui/dist/css/coreui.min.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				clients: {
					merge(existing, incoming) {
						return incoming
					},
				},
				projects: {
					merge(existing, incoming) {
						return incoming
					},
				},
			},
		},
	},
})

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: cache,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>
)
