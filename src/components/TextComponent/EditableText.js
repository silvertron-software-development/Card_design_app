import React from 'react'
import { ResizableText } from './ResizableText'
import EditableTextInput from './EditableTextInput'

export function EditableText({
  x,
  y,
  isEditing,
  isTransforming,
  onToggleEdit,
  onToggleTransform,
  onChange,
  onResize,
  text,
  width,
  height,
}) {
  function handleTextChange(e) {
    onChange(e.currentTarget.value)
  }

  console.log(isEditing)
  console.log(isTransforming)

  if (isEditing) {
    return (
      <EditableTextInput
        x={x}
        y={y}
        width={width}
        height={height}
        value={text}
        onChange={handleTextChange}
        isEditing={isEditing}
      />
    )
  }
  return (
    <ResizableText
      x={x}
      y={y}
      isSelected={isTransforming}
      onClick={onToggleTransform}
      onDoubleClick={onToggleEdit}
      onResize={onResize}
      text={text}
      width={width}
    />
  )
}
