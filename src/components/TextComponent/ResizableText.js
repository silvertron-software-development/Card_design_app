import React, { useRef, useEffect } from 'react'
import { Text, Transformer } from 'react-konva'

export function ResizableText({
  x,
  y,
  id,
  text,
  isSelected,
  width,
  onResize,
  onClick,
  onDoubleClick,
  onPositionChange,
}) {
  const textRef = useRef(null)
  const transformerRef = useRef(null)

  useEffect(() => {
    if (isSelected && transformerRef.current !== null) {
      transformerRef.current.nodes([textRef.current])
      transformerRef.current.getLayer().batchDraw()
    }
  }, [isSelected])

  function handleResize() {
    if (textRef.current !== null) {
      const textNode = textRef.current
      const newWidth = textNode.width() * textNode.scaleX()
      const newHeight = textNode.height() * textNode.scaleY()
      textNode.setAttrs({
        width: newWidth,
        scaleX: 1,
      })
      onResize(newWidth, newHeight)
    }
  }

  const transformer = isSelected ? (
    <Transformer
      ref={transformerRef}
      rotateEnabled={false}
      flipEnabled={false}
      enabledAnchors={['middle-left', 'middle-right']}
      boundBoxFunc={(oldBox, newBox) => {
        newBox.width = Math.max(30, newBox.width)
        return newBox
      }}
    />
  ) : null

  return (
    <>
      <Text
        x={x}
        y={y}
        ref={textRef}
        padding={7}
        fontFamily='Impact'
        text={text}
        fill='black'
        fontSize={16}
        perfectDrawEnabled={false}
        onTransform={handleResize}
        onClick={onClick}
        onTap={onClick}
        onDblClick={onDoubleClick}
        onDblTap={onDoubleClick}
        width={width}
        draggable
        onDragEnd={(e) => {
          onPositionChange({ x: e.target.x(), y: e.target.y(), id })
        }}
      />
      {transformer}
    </>
  )
}
