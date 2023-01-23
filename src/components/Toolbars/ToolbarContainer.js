import React from 'react'
import styled from 'styled-components'
import ImagesToolbar from './ImagesToolbar'
import ShapesToolbar from './ShapesToolbar'
import TextToolbar from './TextToolbar'

const ToolbarContainer = ({ selectedType }) => {
	if (!selectedType) {
		return (
			<Wrapper className="card is-shady">
				<p>Seleccione un Elemento para modificar</p>
			</Wrapper>
		)
	}

	return (
		<>
			{selectedType === 'text' && <TextToolbar />}
			{selectedType === 'shape' && <ShapesToolbar />}
			{selectedType === 'image' && <ImagesToolbar />}
		</>
	)
}

export default ToolbarContainer

const Wrapper = styled.section`
	grid-column: 1 / 4;
	height: 5rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
	background-color: #eaeaea;
	border-bottom: 2px solid #f49441;
	margin-bottom: 50px;
`
