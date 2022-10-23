import React, { useState, useRef } from 'react'
import { Stage, Layer } from 'react-konva'
import CircleComponent from './components/CircleComponent'
import FirstToolbar from './components/FirstToolbar'
import MainToolbar from './components/MainToolbar'
import Rectangle from './components/Rectangle'
import RightToolbar from './components/RightToolbar'
import { TextComponent } from './components/TextComponent'
import { useStage } from './context/StageContext'

export default function App() {
  const { textElements, changePosition } = useStage()
  const [circles, setCircles] = useState([])
  const [squares, setSquares] = useState([])
  const [selectedShape, selectShape] = useState(null)
  const [words, setWords] = useState([])
  const stageRef = useRef(null)
  const [selected, setSelected] = useState(false)
  const [selectedType, setSelectedType] = useState(null)

  const eraseSelection = () => {
    selectShape(null)
    setSelected(null)
    setSelectedType(null)
  }

  return (
    <>
      <MainToolbar />
      <Stage
        width={200}
        height={300}
        ref={stageRef}
        onDblClick={eraseSelection}
      >
        <FirstToolbar
          circles={circles}
          setCircles={setCircles}
          setSquares={setSquares}
          squares={squares}
          words={words}
          setWords={setWords}
        />
      </Stage>
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
            {circles.map((eachCircle) => (
              <CircleComponent
                x={eachCircle.x}
                y={eachCircle.y}
                radius={25}
                isSelected={eachCircle.id === selectedShape}
                fill={eachCircle.fill}
                stroke={eachCircle.stroke}
                key={eachCircle.id}
                id={eachCircle.id}
                onSelect={selectShape}
                onChange={(newAttrs) => {
                  const circs = circles.map((cir) => {
                    return newAttrs.id === cir.id
                      ? { ...cir, x: newAttrs.x, y: newAttrs.y }
                      : cir
                  })
                  setCircles(circs)
                }}
                onShapeSelect={setSelectedType}
              />
            ))}
            {squares.map((square) => {
              console.log(square)
              return (
                <Rectangle
                  x={square.x}
                  y={square.y}
                  isSelected={square.id === selectedShape}
                  width={50}
                  height={50}
                  fill={square.fill}
                  stroke={square.stroke}
                  strokeWidth={square.strokeWidth}
                  key={square.id}
                  id={square.id}
                  onSelect={selectShape}
                  onShapeSelect={setSelectedType}
                  onChange={(newAttrs) => {
                    const rects = squares.map((sq) => {
                      return newAttrs.id === sq.id
                        ? {
                            ...sq,
                            x: newAttrs.x,
                            y: newAttrs.y,
                            strokeWidth: newAttrs.strokeWidth,
                          }
                        : sq
                    })
                    setSquares(rects)
                    console.log(squares)
                  }}
                />
              )
            })}
            {textElements.map((word) => (
              <TextComponent
                x={word.x}
                y={word.y}
                text={word.text}
                selected={selected}
                key={word.id}
                id={word.id}
                align={word.align}
                setSelected={setSelected}
                onPositionChange={(newAttrs) => {
                  changePosition(newAttrs)
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>
      {selectedShape && (
        <RightToolbar
          shapes={selectedType === 'circle' ? circles : squares}
          setShapes={selectedType === 'circle' ? setCircles : setSquares}
          selected={selectedShape}
        />
      )}
    </>
  )
}
