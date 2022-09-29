import React from 'react'
import { CButton } from '@coreui/react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../graphql/mutation/clientMutations'
import { GET_CLIENTS } from '../graphql/querys/clientQuerys'

const ClientItems = ({ clients }) => {
	const [deleteClient] = useMutation(DELETE_CLIENT, {
		variables: { id: clients.id },
		refetchQueries: [{ query: GET_CLIENTS }],
	})

	return (
		<tr>
			<th>{clients.id}</th>
			<th>{clients.name}</th>
			<th>{clients.phone}</th>
			<th>{clients.email}</th>
			<th>
				<CButton color='danger' onClick={deleteClient}>
					<FaTrash />
				</CButton>
			</th>
		</tr>
	)
}

export default ClientItems
