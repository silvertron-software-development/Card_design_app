import React, { useEffect, useRef } from 'react'
import { Image, Transformer } from 'react-konva'
import useImage from 'use-image'

const ImageElement = ({
  src,
  id,
  x,
  y,
  width,
  height,
  onPositionChange,
  selected,
  onResize,
  onSelect,
}) => {
  const imageRef = useRef()
  const trRef = useRef()
  const [image] = useImage(src)

  useEffect(() => {
    if (selected) {
      // we need to attach transformer manually
      trRef.current.nodes([imageRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [selected])
  return (
    <>
      <Image
        draggable
        onClick={() => onSelect(id)}
        onTap={() => onSelect(id)}
        x={x}
        y={y}
        image={image}
        ref={imageRef}
        width={width}
        height={height}
        onDragEnd={(e) =>
          onPositionChange({ x: e.target.x(), y: e.target.y(), id })
        }
      />
      {selected && (
        <Transformer
          ref={trRef}
          rotateEnabled={true}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-right',
            'bottom-left',
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            const node = imageRef.current
            const scaleX = node.scaleX()
            const scaleY = node.scaleY()
            onResize({
              x: node.x(),
              y: node.y(),
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            })
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

export default ImageElement
