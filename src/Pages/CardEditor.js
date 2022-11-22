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

export const CardEditor = () => {
  const {
    textElements,
    shapes,
    changePosition,
    selectedElement,
    selectedType,
    setSelectedElement,
    changeShapePosition,
    changeShapeSize,
  } = useStage()

  const stageRef = useRef(null)

  const eraseSelection = () => {
    setSelectedElement(null, null)
  }

  const selectShape = (id) => {
    setSelectedElement(id, 'shape')
  }

  return (
    <>
      {selectedType === 'text' && <TextToolbar />}
      {selectedType === 'shape' && <ShapesToolbar />}
      <MainToolbar />

      <Stage
        width={200}
        height={300}
        ref={stageRef}
        onDblClick={eraseSelection}
      ></Stage>
      <div
        style={{
          borderWidth: '1px',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderStyle: 'solid',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <Stage
          width={500}
          height={280}
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
                  onPositionChange={(newAttrs) => {
                    changePosition(newAttrs)
                  }}
                />
              )
            })}
            <ImageElement />
          </Layer>
        </Stage>
      </div>
    </>
  )
}
