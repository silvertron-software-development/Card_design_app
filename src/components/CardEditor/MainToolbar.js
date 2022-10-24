import React, { useState } from 'react'
import ElementSelect from './ElementSelect'
import TextOptions from './TextOptions'

const MainToolbar = () => {
  const [selectedElement, setSelectedElement] = useState('text')
  return (
    <>
      <h3>Seleccione el element a colocar</h3>
      <ElementSelect
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      />
      {selectedElement === 'text' ? (
        <TextOptions />
      ) : (
        <h3>New Element to add</h3>
      )}
    </>
  )
}

export default MainToolbar
