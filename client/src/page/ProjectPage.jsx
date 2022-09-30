import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { useQuery } from '@apollo/client'
import { CSpinner } from '@coreui/react'
import { GET_PROJECT } from '../graphql/querys/projectQuery'
import {
	CRow,
} from '@coreui/react'
import AddProject from '../components/AddProjects'

const ProjectPage = () => {
	const { loading, error, data } = useQuery(GET_PROJECT)

	if (loading) return <CSpinner />
	if (error) return <p>Something Went Wrong</p>
	return (
		<div>
		<CRow xs={{ cols: 1 }} md={{ cols: 3 }} className='pt-2'>
			{data.projects.map((project, index) => (
				<ProjectCard project={project} key={index} />
			))}
		</CRow>
		<AddProject/>
		</div>
	)
}

export default ProjectPage
