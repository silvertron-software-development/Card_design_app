import React from 'react'
import styled from 'styled-components'
import { useStage } from '../../context/StageContext'
import { MdRoundedCorner } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import { IoMdColorFill } from 'react-icons/io'
import { hexToRgbA } from '../../helpers/hexToRGBA'

const ImagesToolbar = () => {
  const {
    handleImagePropertyChange,
    findImage,
    selectedElement,
    handleImageFilterChange,
    deleteImage,
  } = useStage()

  const selectedImage = findImage(selectedElement)

  const { lineCap } = selectedImage

  const handleFilterChange = (e) => {
    let { value } = e.target
    value = hexToRgbA(e.target.value)
    value = value.slice(5, -1)
    const params = value.split(',').map((str) => parseInt(str))
    handleImageFilterChange(params, selectedElement)
  }

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
      <div>
        <label htmlFor='fill'>
          <IoMdColorFill />
        </label>
        <input
          name='fill'
          id='fill'
          type='color'
          onChange={handleFilterChange}
        />
      </div>
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
