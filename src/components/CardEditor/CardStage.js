import React from 'react'
import { useStage } from '../../context/StageContext'
import CircleComponent from '../Shapes/CircleComponent'
import Rectangle from '../Shapes/Rectangle'
import { TextComponent } from '../TextComponent'
import ImageElement from '../ImageComponents/ImageElement'
import { Stage, Layer } from 'react-konva'
import styled from 'styled-components'

const CardStage = ({
	stageRef,
	eraseSelection,
	elements,
	selectShape,
	selectImage,
	active
}) => {
	const {
		changePosition,
		selectedElement,
		setSelectedElement,
		changeShapePosition,
		changeShapeSize,
		changeImagePosition,
		changeImageSize
	} = useStage()

	const { shapes, textElements, images } = elements

	console.log(active)

	return (
		<Wrapper active={active}>
			<Stage
				width={1083}
				height={633}
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
										changeShapePosition({ ...newAttrs })
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
									changeShapePosition({ ...newAttrs })
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
							zIndex
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
									changePosition({ ...newAttrs })
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
							alpha
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
								onPositionChange={(newAttrs) =>
									changeImagePosition({ ...newAttrs })
								}
								selected={selectedElement === id}
								onResize={changeImageSize}
								onSelect={selectImage}
							/>
						)
					})}
				</Layer>
			</Stage>
		</Wrapper>
	)
}

export default CardStage

const Wrapper = styled.div`
	border-width: 1px;
	border-color: rgba(0, 0, 0, 0.1);
	border-style: 'solid';
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	height: ${(props) => (props.active ? 'auto' : 0)};
	overflow: hidden;
`
