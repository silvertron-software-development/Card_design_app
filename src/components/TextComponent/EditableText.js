import React from 'react'
import { ResizableText } from './ResizableText'

export function EditableText({
  x,
  y,
  id,
  isTransforming,
  onToggleEdit,
  onToggleTransform,
  onResize,
  onPositionChange,
  text,
  width,
  align,
}) {
  console.log(text)
  if (!text) {
    text = 'Inserte Texto'
  }

  return (
    <ResizableText
      x={x}
      y={y}
      id={id}
      isSelected={isTransforming}
      onClick={onToggleTransform}
      onDoubleClick={onToggleEdit}
      onResize={onResize}
      text={text}
      width={width}
      onPositionChange={onPositionChange}
      align={align}
    />
  )
}
