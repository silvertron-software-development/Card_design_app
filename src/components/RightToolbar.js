import React from 'react'
import styled from 'styled-components'
import { FaUnderline, FaItalic, FaBold, FaTrashAlt } from 'react-icons/fa'
import { FiType } from 'react-icons/fi'
import { useStage } from '../context/StageContext'

const RightToolbar = ({ selectedElement }) => {
  const { handleTextPropertyChange, findTextElement } = useStage()

  const selectedTextElement = findTextElement(selectedElement)

  const { fontSize, fontStyle, fontFamily, fill, textDecoration } =
    selectedTextElement

  const handleStyleChange = (e, style) => {
    let newStyle = fontStyle
    console.log(newStyle)
    if (newStyle.includes(style)) {
      const replaced = newStyle.replace(style, '')
      handleTextPropertyChange('fontStyle', replaced, selectedElement)
      return
    }
    newStyle = `${newStyle} ${style}`
    handleTextPropertyChange('fontStyle', newStyle, selectedElement)
    return
  }

  const handleChange = (e, propertyName) => {
    let newProperty = e.target.value
    if (propertyName === 'textDecoration' && textDecoration === '') {
      newProperty = 'underline'
    }

    if (propertyName === 'textDecoration' && textDecoration === 'underline') {
      newProperty = 'underline'
    }
    if (propertyName === 'fontSize') {
      newProperty = Number(newProperty)
    }
    handleTextPropertyChange(propertyName, newProperty, 'asdasd')
  }

  return (
    <Wrapper>
      <div>
        <label htmlFor='primary_color'>Color del texto</label>
        <input
          type='color'
          value={fill}
          onChange={(e) => handleChange(e, 'fill')}
          className='primary_color'
          id='primary_color'
        />
      </div>
      <div>
        <label htmlFor='text-size' className='text-icon'>
          Tamaño
        </label>
        <input
          type='number'
          id='text-size'
          value={fontSize}
          onChange={(e) => handleChange(e, 'fontSize')}
        />
      </div>
      <label htmlFor='letter-type' className='text-icon'>
        <FiType />
      </label>
      <input
        type='text'
        placeholder='impact'
        value={fontFamily}
        onChange={(e) => handleChange(e, 'fontFamily')}
        id='letter-type'
        className='letter-type'
      />

      <span
        title='Subrayado'
        className='text-icon'
        onClick={(e) => handleChange(e, 'textDecoration')}
      >
        <FaUnderline />
      </span>
      <span
        title='Cursiva'
        className='text-icon'
        onClick={(e) => handleStyleChange(e, 'italic')}
      >
        <FaItalic />
      </span>
      <span
        title='Negritas'
        className='text-icon'
        onClick={(e) => handleStyleChange(e, 'bold')}
      >
        <FaBold />
      </span>
      <span title='Eliminar' className='text-icon'>
        <FaTrashAlt />
      </span>
    </Wrapper>
  )
}

export default RightToolbar

const Wrapper = styled.section`
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;

  .primary_color {
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }

  .letter-type {
    height: fit-content;
  }

  .primary_color::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  .primary_color::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }

  .text-icon {
    cursor: pointer;
  }
`
