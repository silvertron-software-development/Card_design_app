import React from 'react'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

const TextInput = ({ id, text, handleChange }) => {
  return (
    <InputWrapper
      className='input is-rounded'
      key={id}
      type='text'
      value={text}
      onChange={(e) => handleChange(e, id)}
      placeholder='Inserte Texto Aquí'
    />
  )
}

export default TextInput

const InputWrapper = styled.input`

  // border-width: 0 0 1px 0;
  // border-style: solid;
  // border-color: black;
  // outline: none;
  // text-align: left;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
`
