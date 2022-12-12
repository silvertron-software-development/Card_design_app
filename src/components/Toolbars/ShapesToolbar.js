import React from 'react'
import styled from 'styled-components'
import { useStage } from '../../context/StageContext'
import { IoMdColorFill } from 'react-icons/io'
import { MdBorderColor } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import DispositionButtons from './DispositionButtons'

const ShapesToolbar = () => {
  const {
    handleShapePropertyChange,
    findShape,
    selectedElement,
    deleteShape,
    handleZIndexChange,
  } = useStage()

  const selectedShape = findShape(selectedElement)

  const { strokeWidth, fill, stroke } = selectedShape

  const handleChange = (e) => {
    let newProperty = e.target.value
    let propertyName = e.target.name
    if (propertyName === 'strokeWidth') {
      newProperty = Number(newProperty)
    }
    handleShapePropertyChange(propertyName, newProperty, selectedElement)
  }
  return (
    <Wrapper>
      <div>
        <input
          name='strokeWidth'
          value={strokeWidth}
          type='number'
          onChange={handleChange}
          className='primary_color'
        />
      </div>
      <div>
        <label htmlFor='fill'>
          <IoMdColorFill />
        </label>
        <input
          name='fill'
          id='fill'
          value={fill}
          type='color'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='stroke'>
          <MdBorderColor />
        </label>
        <input
          name='stroke'
          id='stroke'
          value={stroke}
          type='color'
          onChange={handleChange}
          className='primary_color'
        />
      </div>
      <span
        title='Eliminar'
        className='text-icon'
        onClick={() => deleteShape(selectedElement)}
      >
        <FaTrashAlt />
      </span>
      {/* <DispositionButtons
        bringUp={() => {
          handleZIndexChange('shapes', selectedElement, true)
        }}
        bringDown={() => {
          handleZIndexChange('shapes', selectedElement, false)
        }}
      /> */}
    </Wrapper>
  )
}

export default ShapesToolbar

const Wrapper = styled.div`
  grid-column: 1 / 4;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;

  span {
    cursor: pointer;
  }

  .primary_color {
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }

  .primary_color::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  .primary_color::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }
`
