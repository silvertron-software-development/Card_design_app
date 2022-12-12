import { useEffect, useRef } from 'react'
import { Rect, Transformer } from 'react-konva'

const Rectangle = ({
  x,
  y,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  id,
  isSelected,
  zIndex,
  onSelect,
  onResize,
  onPositionChange,
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

  return (
    <>
      <Rect
        onClick={() => onSelect(id)}
        onTap={() => onSelect(id)}
        ref={shapeRef}
        stroke={stroke}
        fill={fill}
        x={x}
        y={y}
        width={width}
        height={height}
        strokeWidth={strokeWidth}
        strokeScaleEnabled={false}
        draggable
        onDragEnd={(e) => {
          onPositionChange({ x: e.target.x(), y: e.target.y(), id })
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current
          const scaleX = node.scaleX()
          const scaleY = node.scaleY()
          onResize({
            x: node.x(),
            y: node.y(),
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
