import Layout from './components/Layout'
import React, {Suspense} from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import ClientPage from './page/ClientPage'

const loading = (
	<div className='pt-3 text-center'>
		<div className='sk-spinner sk-spinner-pulse'></div>
	</div>
)
const ProjectPages = React.lazy(() => import('./page/ProjectPage'))

function App() {
	return (
		<Layout>
			<Suspense fallback={loading}>
				<Routes>
					<Route path='/' element={<ClientPage />} />
					<Route path='project' element={<ProjectPages/>}/>
				</Routes>
				<ToastContainer position='bottom-right' />
			</Suspense>
		</Layout>
	)
}

export default App
