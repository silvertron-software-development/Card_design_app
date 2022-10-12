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
  let textValue = text === 'Texto' ? '' : text

  if (isEditing) {
    const style = getStyle(width, height)

    return (
      <Html
        groupProps={{ x, y }}
        divProps={{
          style: { opacity: 1, color: 'black' },
        }}
      >
        <textarea value={textValue} onChange={onChange} style={style} />
      </Html>
    )
  }
  return <Text x={x} y={y} width={width} text={text} />
}

export default EditableTextInput
