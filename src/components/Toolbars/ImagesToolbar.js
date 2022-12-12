import React from 'react'
import styled from 'styled-components'
import { useStage } from '../../context/StageContext'
import { MdRoundedCorner } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'

const ImagesToolbar = () => {
  const { handleImagePropertyChange, findImage, selectedElement, deleteImage } =
    useStage()

  const selectedImage = findImage(selectedElement)

  console.log(selectedImage)

  const { lineCap } = selectedImage

  const handleChange = (propertyName) => {
    let newProperty
    if (lineCap !== 'rounded') {
      newProperty = 'rounded'
    } else {
      newProperty = 'butt'
    }
    if (selectedImage)
      handleImagePropertyChange(propertyName, newProperty, selectedElement)
  }
  return (
    <Wrapper>
      {selectedImage && !selectedImage.icon && (
        <button
          type='button'
          onClick={() => {
            handleChange('lineCap')
          }}
        >
          <MdRoundedCorner />
        </button>
      )}

      <span
        title='Eliminar'
        className='text-icon'
        onClick={() => deleteImage(selectedElement)}
      >
        <FaTrashAlt />
      </span>
    </Wrapper>
  )
}

export default ImagesToolbar

const Wrapper = styled.div`
  grid-column: 1 / 4;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;

  span,
  button {
    cursor: pointer;
  }
`
