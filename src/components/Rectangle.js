import { useEffect, useRef } from 'react'
import { Rect, Transformer } from 'react-konva'

const Rectangle = ({
  x,
  y,
  width,
  height,
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
    onShapeSelect('rect')
  }
  return (
    <>
      <Rect
        onClick={select}
        onTap={select}
        ref={shapeRef}
        stroke={stroke}
        fill={fill}
        x={x}
        y={y}
        width={width}
        height={height}
        draggable
        onDragEnd={(e) => {
          onChange({
            id,
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

export default Rectangle
