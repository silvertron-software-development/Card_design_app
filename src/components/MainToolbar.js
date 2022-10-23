import React from 'react'
import { useStage } from '../context/StageContext'

import TextInput from './TextInput'

const MainToolbar = () => {
  const { textElements, handleTextChange, addText } = useStage()

  const handleChange = (e, id) => {
    const { value } = e.target
    handleTextChange(value, id)
  }
  return (
    <div>
      {textElements.map((el) => {
        const { id, text } = el
        return (
          <TextInput key={id} id={id} text={text} handleChange={handleChange} />
        )
      })}
      <button onClick={addText} type='button'>
        Agregar Nuevo Campo de Texto
      </button>
    </div>
  )
}

export default MainToolbar
