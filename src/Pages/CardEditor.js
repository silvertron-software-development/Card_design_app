import React, { useRef } from 'react'
import { useStage } from '../context/StageContext'
import MainToolbar from '../components/CardEditor/MainToolbar'
import TextToolbar from '../components/Toolbars/TextToolbar'
import Rectangle from '../components/Shapes/Rectangle'
import CircleComponent from '../components/Shapes/CircleComponent'
import { TextComponent } from '../components/TextComponent'
import { Stage, Layer } from 'react-konva'
import ShapesToolbar from '../components/Toolbars/ShapesToolbar'
import ImageElement from '../components/ImageComponents/ImageElement'
import styled from 'styled-components'
import ImagesToolbar from '../components/Toolbars/ImagesToolbar'

export const CardEditor = () => {
  const {
    textElements,
    shapes,
    images,
    changePosition,
    selectedElement,
    selectedType,
    setSelectedElement,
    changeShapePosition,
    changeShapeSize,
    changeImagePosition,
    changeImageSize,
  } = useStage()

  const stageRef = useRef(null)

  const eraseSelection = () => {
    setSelectedElement(null, null)
  }

  const selectShape = (id) => {
    setSelectedElement(id, 'shape')
  }

  const selectImage = (id) => {
    setSelectedElement(id, 'image')
  }

  return (
    <Wrapper>
      {selectedType === 'text' && <TextToolbar />}
      {selectedType === 'shape' && <ShapesToolbar />}
      {selectedType === 'image' && <ImagesToolbar />}
      <MainToolbar />
      <div
        style={{
          borderWidth: '1px',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderStyle: 'solid',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <Stage
          width={700}
          height={380}
          ref={stageRef}
          onDblClick={eraseSelection}
        >
          <Layer>
            {shapes.map((shape) => {
              if (shape.component === 'Circle') {
                return (
                  <CircleComponent
                    x={shape.x}
                    y={shape.y}
                    radius={shape.radius}
                    zIndex={shape.zIndex}
                    isSelected={shape.id === selectedElement}
                    strokeWidth={shape.strokeWidth}
                    fill={shape.fill}
                    stroke={shape.stroke}
                    key={shape.id}
                    id={shape.id}
                    onSelect={selectShape}
                    onResize={changeShapeSize}
                    onPositionChange={(newAttrs) => {
                      changeShapePosition(newAttrs)
                    }}
                  />
                )
              }
              return (
                <Rectangle
                  x={shape.x}
                  y={shape.y}
                  isSelected={shape.id === selectedElement}
                  zIndex={shape.zIndex}
                  width={shape.width}
                  height={shape.height}
                  fill={shape.fill}
                  stroke={shape.stroke}
                  strokeWidth={shape.strokeWidth}
                  onSelect={selectShape}
                  onResize={changeShapeSize}
                  key={shape.id}
                  id={shape.id}
                  onPositionChange={(newAttrs) => {
                    changeShapePosition(newAttrs)
                  }}
                />
              )
            })}

            {textElements.map((word) => {
              const {
                x,
                y,
                fill,
                fontStyle,
                text,
                id,
                align,
                fontSize,
                textDecoration,
                fontFamily,
                zIndex,
              } = word
              return (
                <TextComponent
                  x={x}
                  y={y}
                  fill={fill}
                  text={text}
                  selected={selectedElement === id}
                  setSelected={setSelectedElement}
                  key={id}
                  id={id}
                  align={align}
                  fontSize={fontSize}
                  textDecoration={textDecoration}
                  fontFamily={fontFamily}
                  fontStyle={fontStyle}
                  zIndex={zIndex}
                  onPositionChange={(newAttrs) => {
                    changePosition(newAttrs)
                  }}
                />
              )
            })}
            {images.map((image) => {
              const {
                x,
                y,
                width,
                height,
                id,
                src,
                fill,
                red,
                green,
                blue,
                alpha,
              } = image
              return (
                <ImageElement
                  key={id}
                  src={src}
                  id={id}
                  fill={fill}
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  red={red}
                  green={green}
                  blue={blue}
                  alpha={alpha}
                  onPositionChange={(newAttrs) => changeImagePosition(newAttrs)}
                  selected={selectedElement === id}
                  onResize={changeImageSize}
                  onSelect={selectImage}
                />
              )
            })}
          </Layer>
        </Stage>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`
