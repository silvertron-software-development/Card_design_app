import React from 'react'
import { ResizableText } from './ResizableText'
import EditableTextInput from './EditableTextInput'

export function EditableText({
  x,
  y,
  id,
  isEditing,
  isTransforming,
  onToggleEdit,
  onToggleTransform,
  onTextChange,
  onResize,
  onPositionChange,
  text,
  width,
  height,
}) {
  function handleTextChange(e) {
    onTextChange(e.currentTarget.value)
  }

  console.log(text)
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
        text={text}
      />
    )
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
    />
  )
}
