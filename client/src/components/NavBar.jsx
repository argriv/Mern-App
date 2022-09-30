import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
	CContainer,
	CNavbar,
	CNavbarBrand,
} from '@coreui/react'
import { FaBitcoin } from 'react-icons/fa'

const NavBar = () => {
	  const location = useLocation()

	return (
		<CNavbar colorScheme='light' className='bg-slate-200'>
			<CContainer fluid>
				<CNavbarBrand to='/'>
					<FaBitcoin />
				</CNavbarBrand>
				<div className='flex'>
					<Link
						to={location.pathname === '/' ? 'project' : '/'}
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 no-underline'
					>
						{location.pathname === '/' ? 'project' : 'clients'}
					</Link>
				</div>
			</CContainer>
		</CNavbar>
	)
}
export default NavBar
