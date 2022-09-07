import React, { useState, useRef } from 'react'
import { Stage, Layer } from 'react-konva'
import CircleComponent from './components/CircleComponent'
import FirstToolbar from './components/FirstToolbar'
import Rectangle from './components/Rectangle'
import RightToolbar from './components/RightToolbar'
import { TextComponent } from './components/TextComponent'

export default function App() {
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
      <Stage
        width={800}
        height={500}
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
        <Layer>
          {circles.map((eachCircle, i) => (
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
                const circs = circles.slice()
                circles[i] = newAttrs
                setCircles(circs)
              }}
              onShapeSelect={setSelectedType}
            />
          ))}
          {squares.map((square, i) => (
            <Rectangle
              x={square.x}
              y={square.y}
              isSelected={square.id === selectedShape}
              width={50}
              height={50}
              fill={square.fill}
              stroke={square.stroke}
              key={square.id}
              id={square.id}
              onSelect={selectShape}
              onShapeSelect={setSelectedType}
              onChange={(newAttrs) => {
                const rects = squares.slice()
                squares[i] = newAttrs
                setSquares(rects)
              }}
            />
          ))}
          {words.map((word, i) => (
            <TextComponent
              x={word.x}
              y={word.y}
              selected={selected}
              key={word.id}
              id={word.id}
              setSelected={setSelected}
            />
          ))}
        </Layer>
      </Stage>
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
