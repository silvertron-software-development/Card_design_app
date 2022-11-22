import React, { useState } from 'react'
import ShapeSelect from './ShapeSelect'
import ElementSelect from './ElementSelect'
import TextOptions from './TextOptions'
import styled from 'styled-components'
import ImageImport from './ImageImport'

const MainToolbar = () => {
  const [activeElement, setActiveElement] = useState('text')
  return (
    <Wrapper>
      <ElementSelect
        selectedElement={activeElement}
        setSelectedElement={setActiveElement}
      />
      {activeElement === 'text' ? (
        <TextOptions />
      ) : activeElement === 'shape' ? (
        <ShapeSelect />
      ) : (
        <ImageImport />
      )}
    </Wrapper>
  )
}

export default MainToolbar

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
