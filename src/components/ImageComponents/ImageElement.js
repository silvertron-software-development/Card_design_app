import React, { useState, useRef } from 'react'
import { Image, Transformer } from 'react-konva'
import useImage from 'use-image'
import myimage from '../../assets/images/testimage.png'

const ImageElement = () => {
  const [selected, setSelected] = useState(true)
  const shapeRef = useRef()
  const trRef = useRef()
  //'https://konvajs.org/assets/lion.png'
  const [image] = useImage('https://konvajs.org/assets/lion.png')

  React.useEffect(() => {
    if (selected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [selected])
  return (
    <>
      <Image draggable image={image} ref={shapeRef} />
      {selected && (
        <Transformer
          ref={trRef}
          rotateEnabled={true}
          padding={10}
          enabledAnchors={[
            'top-left',
            'top-right',
            'bottom-right',
            'bottom-left',
          ]}
          boundBoxFunc={(oldBox, newBox) => {
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
