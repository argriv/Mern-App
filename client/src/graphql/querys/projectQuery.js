import { gql } from '@apollo/client'

export const GET_PROJECT = gql`
	query getProjects {
		projects {
			id
			name
			description
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`

