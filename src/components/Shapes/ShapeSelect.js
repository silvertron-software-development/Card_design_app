import { Layer, Circle, Rect } from 'react-konva'
import React from 'react'

const ShapeSelect = ({ addShape }) => {
  const addNewShape = (newShape) => {
    addShape(newShape)
  }
  return (
    <Layer>
      <Circle
        name='draggableCircle'
        x={50}
        y={50}
        radius={25}
        fill='#000000'
        onClick={() => {
          addNewShape({ component: Circle, radius: 25 })
        }}
      />
      <Rect
        name='draggableRect'
        x={25}
        y={100}
        width={50}
        height={50}
        fill='#000000'
        onClick={() => {
          addNewShape({
            component: Rect,
            strokeWidth: 2,
            width: 50,
            height: 50,
          })
        }}
      />
    </Layer>
  )
}

export default ShapeSelect
