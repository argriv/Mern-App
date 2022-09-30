import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_PROJECT } from '../graphql/querys/projectQuery'
import { ADD_PROJECT } from '../graphql/mutation/projectMutation'
import { toast } from 'react-toastify'
import { GET_CLIENTS } from '../graphql/querys/clientQuerys'
import { useQuery } from '@apollo/client'
import { CSpinner } from '@coreui/react'

const AddProject = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [clientId, setClientId] = useState('')
	const [status, setStatus] = useState('new')

	const [addProject] = useMutation(ADD_PROJECT, {
		variables: { name, description, clientId, status },
		update(cache, { data: { addProject } }) {
			const { projects } = cache.readQuery({ query: GET_PROJECT })
			cache.writeQuery({
				query: GET_PROJECT,
				data: { projects: [...projects, addProject] },
			})
		},
	})

	// Get Clients for select
	const { loading, error, data } = useQuery(GET_CLIENTS)

	const onSubmit = e => {
		e.preventDefault()
		toast('complete')
		if (name === '' || description === '' || status === '') {
			return alert('Please fill in all fields')
		}

		addProject(name, description, clientId, status)

		setName('')
		setDescription('')
		setStatus('new')
		setClientId('')
	}

	if (loading) return null
	if (error) return 'Something Went Wrong'

	return (
		<form className='pt-2' onSubmit={onSubmit}>
			<div className='relative z-0 mb-6 w-full group bg-slate-200 rounded pl-2'>
				<select
					onChange={e => setClientId(e.target.value)}
					id='underline_select'
					className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
				>
					<option defaultValue='Selection users:'>
						Selection users:
					</option>
					{loading ? (
						<CSpinner />
					) : (
						data.clients.map((client, index) => (
							<option value={client.id} key={index}>
								{client.name}
							</option>
						))
					)}
				</select>
			</div>

			<div className='relative z-0 mb-6 w-full group bg-slate-200 rounded'>
				<input
					value={description}
					onChange={e => setDescription(e.target.value)}
					type='text'
					name='floating_last_name'
					id='floating_last_name'
					className='block py-2.5 pl-1  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded'
					placeholder=' '
					required
				/>
				<label
					htmlFor='floating_last_name'
					className='peer-focus:font-medium absolute pl-2 text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10'
				>
					Description Project
				</label>
			</div>
			<div className='relative z-0 mb-6 w-full group bg-slate-200 rounded'>
				<input
					value={name}
					onChange={e => setName(e.target.value)}
					type='text'
					name='floating_last_name'
					id='floating_last_name'
					className='block py-2.5 pl-1  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded'
					placeholder=' '
					required
				/>
				<label
					htmlFor='floating_last_name'
					className='peer-focus:font-medium absolute pl-2 text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10'
				>
					Name Project
				</label>
			</div>
			<div className='relative z-0 pl-2 mb-6 w-full group bg-slate-200 rounded'>
				<select
					onChange={e => setStatus(e.target.value)}
					id='underline_select'
					className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
				>
					<option defaultValue='Status:'>
						Status:
					</option>
					<option value='new'>Not Started</option>
					<option value='progress'>In Progress</option>
					<option value='completed'>Completed</option>
				</select>
			</div>
			<button
				type='submit'
				className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 pl-1 text-center'
			>
				Создать
			</button>
		</form>
	)
}

export default AddProject
