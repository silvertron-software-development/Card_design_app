import React, { useState, useEffect } from 'react'
import { ResizableText } from './ResizableText'

export function TextComponent({
  selected,
  setSelected,
  onPositionChange,
  id,
  x,
  y,
  text,
  align,
  fontFamily,
  fontSize,
  fontStyle,
  textDecoration,
  fill,
}) {
  const [isTransforming, setIsTransforming] = useState(false)
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(70)

  useEffect(() => {
    if (!selected && isTransforming) {
      setIsTransforming(false)
    }
  }, [selected, isTransforming])

  function toggleTransforming() {
    setIsTransforming(!isTransforming)
    setSelected(!isTransforming)
  }

  function onTextResize(newWidth, newHeight) {
    setWidth(newWidth)
    setHeight(newHeight)
  }

  if (!text) {
    text = 'Inserte Texto'
  }

  fontSize = Number(fontSize)

  return (
    <ResizableText
      x={x}
      y={y}
      id={id}
      isSelected={isTransforming}
      onClick={toggleTransforming}
      onResize={onTextResize}
      text={text}
      height={height}
      width={width}
      onPositionChange={onPositionChange}
      align={align}
      fill={fill}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      textDecoration={textDecoration}
    />
  )
}
