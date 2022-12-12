import React, { useState } from 'react'
import ShapeSelect from './ShapeSelect'
import ElementSelect from './ElementSelect'
import TextOptions from './TextOptions'
import styled from 'styled-components'
import ImageImport from './ImageImport'
import { useStage } from '../../context/StageContext'
import { useEffect } from 'react'

const MainToolbar = () => {
  const { selectedType } = useStage()
  const [activeElement, setActiveElement] = useState('text')
  const [uploadedImages, setUploadedImages] = useState([])

  useEffect(() => {
    if (selectedType === 'image') {
      setActiveElement('image')
      return
    }
    if (selectedType === 'shape') {
      setActiveElement('shape')
      return
    }
    setActiveElement('text')
  }, [selectedType])
  return (
    <Wrapper>
      <ElementSelect
        selectedElement={activeElement}
        setSelectedElement={setActiveElement}
      />
      <span className='select-container'>
        {activeElement === 'text' ? (
          <TextOptions />
        ) : activeElement === 'shape' ? (
          <ShapeSelect />
        ) : (
          <ImageImport
            uploadedImages={uploadedImages}
            setUploadedImages={setUploadedImages}
          />
        )}
      </span>
    </Wrapper>
  )
}

export default MainToolbar

const Wrapper = styled.div`
  width: 35%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: 0.5rem;
`
