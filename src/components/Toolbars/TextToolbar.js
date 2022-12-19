import React from 'react'
import styled from 'styled-components'
import { useStage } from '../../context/StageContext'
import FontPicker from 'font-picker-react'
import { FaUnderline, FaItalic, FaBold, FaTrashAlt } from 'react-icons/fa'
import { FiType } from 'react-icons/fi'
import DispositionButtons from './DispositionButtons'
import 'bulma/css/bulma.css'

const TextToolbar = () => {
  const {
    handleTextPropertyChange,
    findTextElement,
    selectedElement,
    deleteTextElement,
    handleZIndexChange,
  } = useStage()

  const selectedTextElement = findTextElement(selectedElement)

  const { fontSize, fontStyle, fontFamily, fill, textDecoration } =
    selectedTextElement

  const handleStyleChange = (e, style) => {
    let newStyle = fontStyle

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
      newProperty = ''
    }
    if (propertyName === 'fontSize') {
      newProperty = Number(newProperty)
    }
    handleTextPropertyChange(propertyName, newProperty, selectedElement)
  }

  return (
    <Wrapper className='card is-shady'>
      <div>
        <label htmlFor='primary_color' className='label'>Color del texto</label>
        <input
          type='color'
          value={fill}
          onChange={(e) => handleChange(e, 'fill')}
          className='primary_color'
          id='primary_color'
        />
      </div>
      <div>
        <label htmlFor='text-size' className='text-icon label'>
          Tamaño
        </label>
        <input
          type='number'
          id='text-size'
          value={fontSize}
          onChange={(e) => handleChange(e, 'fontSize')}
          className='input is-small'
        />
      </div>
      <label htmlFor='letter-type' className='text-icon label'>
        Fuente
      </label>
      <FontPicker
        apiKey={process.env.REACT_APP_FONTS_KEY}
        activeFontFamily={fontFamily}
        limit={100}
        onChange={(nextFont) => {
          handleChange({ target: { value: nextFont.family } }, 'fontFamily')
        }}
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
      <span
        title='Eliminar'
        className='text-icon'
        onClick={() => deleteTextElement(selectedElement)}
      >
        <FaTrashAlt />
      </span>
      {/* <DispositionButtons
        bringUp={() => {
          handleZIndexChange('textElements', selectedElement, true)
        }}
        bringDown={() => {
          handleZIndexChange('textElements', selectedElement, false)
        }}
      /> */}
    </Wrapper>
  )
}

export default TextToolbar

const Wrapper = styled.section`
  grid-column: 1 / 4;
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  background-color: #EAEAEA;
  border-bottom: 2px solid #F49441;
  margin-bottom 50px;

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
