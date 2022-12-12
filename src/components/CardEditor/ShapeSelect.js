import { Circle, Rect } from 'react-konva'
import React from 'react'
import { useStage } from '../../context/StageContext'
import { AiTwotonePlusSquare, AiTwotoneClockCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { icons } from '../../utils/imageIcons'

const ShapeSelect = () => {
  const { addShape, addImage } = useStage()
  const addNewShape = (newShape) => {
    addShape(newShape)
  }

  return (
    <Wrapper>
      <span
        className='shape-icon'
        onClick={() => {
          addNewShape({
            component: Rect,
            strokeWidth: 2,
            width: 50,
            height: 50,
          })
        }}
      >
        <AiTwotonePlusSquare />
      </span>
      <span
        className='shape-icon'
        onClick={() => {
          addNewShape({ component: Circle, radius: 25, strokeWidth: 2 })
        }}
      >
        <AiTwotoneClockCircle />
      </span>
      {icons.map((icon) => {
        const { name, src } = icon
        return (
          <span
            key={name}
            onClick={() =>
              addImage({
                src: src,
                x: 150,
                y: 150,
                width: 100,
                height: 100,
                icon: true,
              })
            }
          >
            <img className='icon-select' src={src} alt={name} />
          </span>
        )
      })}
    </Wrapper>
  )
}

export default ShapeSelect

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-right: 0;

  span {
    cursor: pointer;
    padding: 0.3rem;
  }

  span:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .shape-icon {
    font-size: 50px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding-top: 0.3rem;
  }

  .icon-select {
    width: 50px;
    height: 50px;
  }
`
