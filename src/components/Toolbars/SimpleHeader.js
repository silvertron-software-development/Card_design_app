import React from 'react'
import styled from 'styled-components'

import 'bulma/css/bulma.css'

const SimpleHeader = () => {
	return (
		<Wrapper className="card is-shady">
			<span>Litografia Gil</span>
		</Wrapper>
	)
}

export default SimpleHeader

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

	.primary_color {
		border-radius: 50%;
		height: 1.5rem;
		width: 1.5rem;
		border: none;
		outline: none;
		-webkit-appearance: none;
		cursor: pointer;
	}

	.letter-type {
		height: fit-content;
	}

	.primary_color::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	.primary_color::-webkit-color-swatch {
		border: none;
		border-radius: 50%;
	}

	.text-icon {
		cursor: pointer;
	}
`
