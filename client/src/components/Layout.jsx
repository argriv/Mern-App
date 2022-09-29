import { CContainer } from '@coreui/react'
import React from 'react'
import NavBar from '../components/NavBar'

const Layout = ({ children }) => {
	return (
		<React.Fragment>
				<NavBar/>
			<CContainer>
				{children}
			</CContainer>
		</React.Fragment>
	)
}

export default Layout
