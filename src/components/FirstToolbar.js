import { Layer, Circle, Text, Rect } from 'react-konva'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const FirstToolbar = ({
  circles,
  setCircles,
  squares,
  setSquares,
  words,
  setWords,
}) => {
  console.log(squares)
  return (
    <Layer>
      <Circle
        name='draggableCircle'
        x={50}
        y={50}
        radius={25}
        fill='green'
        onClick={() => {
          // push new circle to view
          // note that we must push circle first before returning draggable circle
          // because e.target.x returns draggable circle's positions
          setCircles([
            ...circles,
            {
              x: 250,
              y: 250,
              fill: 'transparent',
              id: uuidv4(),
              stroke: 'black',
            },
          ])

          // return draggable circle to original position
          // notice the dot (.) before "draggableCircle"
          // let stage = stageRef.current
          // let draggableCircle = stage.findOne('.draggableCircle')
          // console.log(draggableCircle)
          // draggableCircle.position({ x: 50, y: 50 })
        }}
      />
      <Rect
        name='draggableRect'
        x={25}
        y={100}
        width={50}
        height={50}
        fill='blue'
        onClick={() => {
          // push new circle to view
          // note that we must push circle first before returning draggable circle
          // because e.target.x returns draggable circle's positions
          setSquares([
            ...squares,
            {
              x: 250,
              y: 250,
              fill: 'transparent',
              id: uuidv4(),
              stroke: 'black',
            },
          ])

          // return draggable circle to original position
          // notice the dot (.) before "draggableCircle"
          // var stage = stageRef.current
          // var draggableRect = stage.findOne('.draggableRect')
          // draggableRect.position({ x: 25, y: 100 })
        }}
      />
      <Text
        name='draggableText'
        fontSize={50}
        text='T'
        fontFamily='times'
        style={{ cursor: 'pointer' }}
        align='center'
        x={35}
        y={180}
        onClick={(e) => {
          // push new circle to view
          // note that we must push circle first before returning draggable circle
          // because e.target.x returns draggable circle's positions
          setWords([
            ...words,
            {
              x: 250,
              y: 250,
              fill: 'transparent',
              id: uuidv4(),
              content: 'Texto',
            },
          ])

          // return draggable circle to original position
          // notice the dot (.) before "draggableCircle"
          // var stage = stageRef.current
          // var draggableRect = stage.findOne('.draggableRect')
          // draggableRect.position({ x: 25, y: 100 })
        }}
      />
    </Layer>
  )
}

export default FirstToolbar
