import { useQuery } from '@apollo/client'
import { CSpinner } from '@coreui/react'
import { GET_CLIENTS } from '../graphql/querys/clientQuerys'
import AddClient from '../components/AddClients'
import ClientItems from '../components/ClientItems'

const Clients = () => {
	const { loading, error, data } = useQuery(GET_CLIENTS)

	if (loading) return <CSpinner />
	if (error) return <p>Something Went Wrong</p>

	return (
		<>
			{!loading && !error && (
				<table className='table table-hover mt-3'>
					<thead>
						<tr className=' border-b'>
							<th>id</th>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{data.clients.map((client, index) => (
							<ClientItems clients={client} key={index} />
						))}
					</tbody>
				</table>
			)}
			<AddClient />
		</>
	)
}

export default Clients
