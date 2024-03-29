import React from 'react'
import { useStage } from '../../context/StageContext'
import TextInput from './TextInput'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

const TextOptions = ({ textElements }) => {
	const { handleTextChange, addText } = useStage()

	const handleChange = (e, id) => {
		const { value } = e.target
		handleTextChange(value, id)
	}
	return (
		<Wrapper>
			{textElements.map((el) => {
				const { id, text } = el
				return (
					<TextInput key={id} id={id} text={text} handleChange={handleChange} />
				)
			})}
			<button
				className="button add-btn is-rounded"
				onClick={addText}
				type="button"
			>
				Agregar Nuevo Campo de Texto
			</button>
		</Wrapper>
	)
}

export default TextOptions

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	justify-items: space-evenly;
	align-items: center;

	.add-btn {
		margin-top: 0.5rem;
		background-color: black;
		color: white;
	}
`
