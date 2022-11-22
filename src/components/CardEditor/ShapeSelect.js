import { Layer, Circle, Rect, Stage } from 'react-konva'
import React from 'react'
import { useStage } from '../../context/StageContext'

const ShapeSelect = () => {
  const { addShape } = useStage()
  const addNewShape = (newShape) => {
    addShape(newShape)
  }
  return (
    <Stage width={100} height={300}>
      <Layer>
        <Circle
          name='draggableCircle'
          x={50}
          y={50}
          radius={25}
          fill='#000000'
          onClick={() => {
            addNewShape({ component: Circle, radius: 25, strokeWidth: 2 })
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
    </Stage>
  )
}

export default ShapeSelect
