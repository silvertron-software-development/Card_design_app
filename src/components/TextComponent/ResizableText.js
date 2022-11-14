import React, { useRef, useEffect } from 'react'
import { Text, Transformer } from 'react-konva'

export function ResizableText({
  x,
  y,
  id,
  text,
  isSelected,
  width,
  height,
  onResize,
  onClick,
  onPositionChange,
  align,
  fontFamily,
  fontSize,
  fontStyle,
  textDecoration,
  fill,
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
        height: newHeight,
        scaleX: 1,
      })
      onResize(newWidth, newHeight)
    }
  }

  const transformer = isSelected ? (
    <Transformer
      ref={transformerRef}
      rotateEnabled={true}
      flipEnabled={false}
      enabledAnchors={[
        'middle-left',
        'middle-right',
        'top-left',
        'top-right',
        'bottom-right',
        'bottom-left',
      ]}
      boundBoxFunc={(oldBox, newBox) => {
        newBox.width = Math.max(30, newBox.width)
        newBox.height = Math.max(30, newBox.height)
        return newBox
      }}
    />
  ) : (
    false
  )

  fontSize = Number(fontSize)

  return (
    <>
      <Text
        x={x}
        y={y}
        width={width}
        height={height}
        ref={textRef}
        padding={10}
        fontFamily={fontFamily}
        text={text}
        fill={fill}
        fontSize={fontSize}
        fontStyle={fontStyle}
        align={align}
        verticalAlign='middle'
        textDecoration={textDecoration}
        perfectDrawEnabled={false}
        onTransform={handleResize}
        onClick={onClick}
        onTap={onClick}
        draggable
        onDragEnd={(e) => {
          onPositionChange({ x: e.target.x(), y: e.target.y(), id })
        }}
      />
      {transformer}
    </>
  )
}
