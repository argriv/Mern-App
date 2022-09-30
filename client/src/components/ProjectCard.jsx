import React from 'react'
import { CCardTitle, CCol, CCard, CCardBody, CCardText, CButton} from '@coreui/react'
import { useMutation } from '@apollo/client'
import { DELETE_PROJECT } from '../graphql/mutation/projectMutation'
import { GET_PROJECT } from '../graphql/querys/projectQuery'
import { FaTrash } from 'react-icons/fa'

const ProjectCard = ({project}) => {
	const [deleteProject] = useMutation(DELETE_PROJECT, {
		variables: { id: project.id },
		refetchQueries: [{ query: GET_PROJECT }],
	})
	return (
		<CCol className='mb-2'>
			<CCard>
				<CCardBody>
					<CCardTitle>{project.name}</CCardTitle>
					<CCardText>{project.description}</CCardText>
					<CCardText>{project.status}</CCardText>
					<CCardText>{project.client.name}</CCardText>
					<CButton color='danger' onClick={deleteProject}>
						<FaTrash />
					</CButton>
				</CCardBody>
			</CCard>
		</CCol>
	)
}

export default ProjectCard
