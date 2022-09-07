import React from 'react'
import styled from 'styled-components'

const RightToolbar = ({ shapes, selected, setShapes }) => {
  const colors = ['#40BE05', '#0453D4', '#D46F04', '#7F04D4', '#FFFFFF']

  const handlePropertChange = (e, property, newProperty) => {
    if (property === 'fill') {
      const newArr = shapes.map((circle) => {
        return circle.id === selected
          ? { ...circle, fill: newProperty }
          : circle
      })
      setShapes(newArr)
    }
    if (property === 'stroke') {
      const newArr = shapes.map((circle) => {
        return circle.id === selected
          ? { ...circle, stroke: newProperty }
          : circle
      })
      setShapes(newArr)
    }
  }

  return (
    <Wrapper>
      <div className='color-div'>
        <h3>Color de Fondo</h3>
        {colors.map((color) => {
          console.log(color)
          return (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className='color-selection'
              onClick={(e) => handlePropertChange(e, 'fill', color)}
            ></div>
          )
        })}
      </div>
      <div className='color-div'>
        <h3>Color de Borde</h3>
        {colors.map((color) => {
          console.log(color)
          return (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className='color-selection'
              onClick={(e) => handlePropertChange(e, 'stroke', color)}
            ></div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default RightToolbar

const Wrapper = styled.section`
  height: 5rem;
  .color-div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .color-selection {
    border: 1px solid black;
    border-radius: 0.2rem;
    cursor: pointer;
    padding: 0.3rem;
    height: 1rem;
    width: 1rem;
    content: ' ';
  }
`
