import React from 'react'
import { Text } from 'react-konva'
import { Html } from 'react-konva-utils'
import { getStyle } from '../../helpers/getStyle'

const EditableTextInput = ({
  x,
  y,
  isEditing,
  onToggleEdit,
  onChange,
  text,
  width,
  height,
}) => {
  if (isEditing) {
    const style = getStyle(width, height)
    console.log('editaaaaando')
    return (
      <Html
        groupProps={{ x, y }}
        divProps={{
          style: { opacity: 1, color: 'black' },
        }}
      >
        <textarea value={text} onChange={onChange} style={style} />
      </Html>
    )
  }
  return <Text x={x} y={y} width={width} text={text} />
}

export default EditableTextInput
