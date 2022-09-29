import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT } from '../graphql/mutation/clientMutations'
import { GET_CLIENTS } from '../graphql/querys/clientQuerys'
import { toast } from 'react-toastify'

const AddClient = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	const [addClient] = useMutation(ADD_CLIENT, {
		variables: { name, email, phone },
		update(cache, { data: { addClient } }) {
			const { clients } = cache.readQuery({ query: GET_CLIENTS })

			cache.writeQuery({
				query: GET_CLIENTS,
				data: { clients: [...clients, addClient] },
			})
		},
	})

	const onSubmit = e => {
		e.preventDefault()
		toast('Add User', {
			theme: 'dark'
		})
		if (name === '' || email === '' || phone === '') {
			return alert('Please fill in all fields')
		}

		addClient(name, email, phone)

		setName('')
		setEmail('')
		setPhone('')
	}

	return (
		<form onSubmit={onSubmit}>
			<div className='relative z-0 mb-6 w-full group bg-slate-200 rounded'>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='email'
					name='floating_email'
					id='floating_email'
					className='block py-2.5 pl-1 rounded w-full text-sm text-gray-900 bg-transparent appearance-none  focus:outline-none focus:ring-0  border-0 peer'
					placeholder=' '
					required
				/>
				<label
					htmlFor='floating_email'
					className='peer-focus:font-medium absolute pl-2 text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Email
				</label>
			</div>

			<div className='grid md:grid-cols-2 md:gap-6'>
				<div className='relative z-0 mb-6 w-full group bg-slate-200 rounded'>
					<input
						value={phone}
						onChange={e => setPhone(e.target.value)}
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
						Phone
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
						Name
					</label>
				</div>
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

export default AddClient
