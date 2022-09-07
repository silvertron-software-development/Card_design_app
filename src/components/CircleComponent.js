import React, { useEffect, useRef } from 'react'
import { Circle, Transformer } from 'react-konva'

const CircleComponent = ({
  x,
  y,
  radius,
  fill,
  stroke,
  id,
  isSelected,
  onSelect,
  onChange,
  onShapeSelect,
}) => {
  const shapeRef = useRef()
  const trRef = useRef()

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [isSelected])

  const select = () => {
    onSelect(id)
    onShapeSelect('circle')
  }
  return (
    <>
      <Circle
        onClick={select}
        onTap={select}
        ref={shapeRef}
        x={x}
        y={y}
        radius={radius}
        fill={fill}
        stroke={stroke}
        draggable
        onDragEnd={(e) => {
          onChange({
            x: e.target.x(),
            y: e.target.y(),
          })
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current
          const scaleX = node.scaleX()
          const scaleY = node.scaleY()

          // we will reset it back
          onChange({
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          })
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox
            }
            return newBox
          }}
        />
      )}
    </>
  )
}

export default CircleComponent
