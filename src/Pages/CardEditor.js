import React, { useRef, useState } from 'react'
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
import { jsPDF } from 'jspdf'
import { postToCheckout } from '../services/checkoutServices/postToCheckout'

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
		changeImageSize
	} = useStage()

	const [redirectUrl, setredirectUrl] = useState(null)

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

	const exportToPDF = async (stage) => {
		let pdf = new jsPDF('p', 'px', [3508, 2480], true)

		let canvas = stageRef.current.getStage()

		pdf.addImage(
			canvas.toDataURL({ pixelRatio: 2 }),
			'PNG',
			// stage.toDataURL({ pixelRatio: 2 }),
			699,
			1438,
			1083,
			633
		)

		pdf.save('canvas.pdf')
		return pdf.output('blob')
	}

	const postPdfAndCheckout = async () => {
		const pdf = await exportToPDF()
		console.log(pdf)
		const url = await postToCheckout('price_1MLxogFPiM3jeCEiCsDS0lDy', pdf)
		setredirectUrl(url)
	}

	return (
		<>
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
						boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
					}}
				>
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
											changeImagePosition(newAttrs)
										}
										selected={selectedElement === id}
										onResize={changeImageSize}
										onSelect={selectImage}
									/>
								)
							})}
						</Layer>
					</Stage>
				</div>
				<span title="pdf" className="" onClick={() => exportToPDF()}>
					PDF
				</span>
			</Wrapper>
			<button type="button" onClick={postPdfAndCheckout}>
				Checkout
			</button>
			{redirectUrl && (
				<div>
					Si no fuiste redirigido automaticamente da click{' '}
					<a href={redirectUrl}>AQUI</a>
				</div>
			)}
		</>
	)
}

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
`
