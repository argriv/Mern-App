import React from 'react'
import { Link } from 'react-router-dom'
import {
	CContainer,
	CNavbar,
	CNavbarBrand,
} from '@coreui/react'
import { FaBeer } from 'react-icons/fa'

const NavBar = () => {
	return (
		<CNavbar colorScheme='light' className='bg-slate-200'>
			<CContainer fluid>
				<CNavbarBrand to='/'>
					<FaBeer />
				</CNavbarBrand>
				<div className='flex'>
					<Link
						to='project'
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 no-underline'
					>
						Project
					</Link>
				</div>
			</CContainer>
		</CNavbar>
	)
}
export default NavBar
