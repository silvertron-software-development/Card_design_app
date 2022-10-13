import React from 'react'
import { useStage } from '../context/StageContext'

const MainToolbar = () => {
  const { textElements } = useStage()
  return (
    <div>
      {textElements.map((el) => {
        return <input type='text' value={el.text} />
      })}
      <button type='button'>Agregar Nuevo Campo de Texto</button>
    </div>
  )
}

export default MainToolbar
