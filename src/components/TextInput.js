import React from 'react'

const TextInput = ({ id, text, handleChange }) => {
  return (
    <div>
      <input
        key={id}
        type='text'
        value={text}
        onChange={(e) => handleChange(e, id)}
        placeholder='Inserte Texto Aquí'
      />
    </div>
  )
}

export default TextInput
