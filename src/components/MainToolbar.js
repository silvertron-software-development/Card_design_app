import React from 'react'
import { useStage } from '../context/StageContext'
import { v4 as uuidv4 } from 'uuid'

const MainToolbar = () => {
  const { textElements, handleTextChange, addText } = useStage()

  const handleChange = (e, id) => {
    const { value } = e.target
    handleTextChange(value, id)
  }
  return (
    <div>
      {textElements.map((el) => {
        return (
          <span key={uuidv4()}>
            <input
              key={el.id}
              type='text'
              value={el.text}
              onChange={(e) => handleChange(e, el.id)}
              placeholder='Inserte Texto Aquí'
            />
            <p key={uuidv4()}>{el.text ? el.text : 'Texto Nuevo'}</p>
          </span>
        )
      })}
      <button onClick={addText} type='button'>
        Agregar Nuevo Campo de Texto
      </button>
    </div>
  )
}

export default MainToolbar
