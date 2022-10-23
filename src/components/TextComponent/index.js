import React, { useState, useEffect } from 'react'
import { EditableText } from './EditableText'

export function TextComponent({
  selected,
  setSelected,
  onPositionChange,
  id,
  x,
  y,
  text,
  align,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [isTransforming, setIsTransforming] = useState(false)

  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(70)

  useEffect(() => {
    if (!selected && isEditing) {
      setIsEditing(false)
    } else if (!selected && isTransforming) {
      setIsTransforming(false)
    }
  }, [selected, isEditing, isTransforming])

  function toggleEdit() {
    setIsEditing(!isEditing)
    setSelected(!isEditing)
  }

  function toggleTransforming() {
    setIsTransforming(!isTransforming)
    setSelected(!isTransforming)
  }

  function onTextResize(newWidth, newHeight) {
    setWidth(newWidth)
    setHeight(newHeight)
  }

  return (
    <EditableText
      x={x}
      y={y}
      id={id}
      text={text}
      width={width}
      height={height}
      onResize={onTextResize}
      isEditing={isEditing}
      isTransforming={isTransforming}
      onToggleEdit={toggleEdit}
      onToggleTransform={toggleTransforming}
      onPositionChange={onPositionChange}
      align={align}
    />
  )
}
