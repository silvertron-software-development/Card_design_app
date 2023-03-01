import React, { useRef } from 'react'
import { useStage } from '../context/StageContext'
import MainToolbar from '../components/CardEditor/MainToolbar'
import TextToolbar from '../components/Toolbars/TextToolbar'
import ShapesToolbar from '../components/Toolbars/ShapesToolbar'
import styled from 'styled-components'
import ImagesToolbar from '../components/Toolbars/ImagesToolbar'
import { useNavigate } from 'react-router-dom'
import { jsPDF } from 'jspdf'
import { postToCloudinary } from '../services/checkoutServices/postToCheckout'
import CardStage from '../components/CardEditor/CardStage'

export const CardEditor = () => {
	const {
		frontSideCard,
		backSideCard,
		selectedType,
		setSelectedElement,
		setPDFUrl,
		setActiveSide,
		isFrontSideActive
	} = useStage()

	let navigate = useNavigate()

	const frontStageRef = useRef(null)
	const backStageRef = useRef(null)

	const eraseSelection = () => {
		setSelectedElement(null, null)
	}

	const selectShape = (id) => {
		setSelectedElement(id, 'shape')
	}

	const selectImage = (id) => {
		setSelectedElement(id, 'image')
	}

	function addWaterMark(doc) {
		var totalPages = doc.internal.getNumberOfPages()

		for (let i = 1; i <= totalPages; i++) {
			doc.setPage(i)
			//doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
			doc.setTextColor(150)
			doc.setFontSize(250)
			doc.text(710, 1754, 'Litografía Gil')
		}

		return doc
	}

	const exportToPDF = async (stage) => {
		let pdf = new jsPDF('p', 'px', [3508, 2480], true)

		let canvas = frontStageRef.current.getStage()

		pdf.addImage(
			canvas.toDataURL({ pixelRatio: 2 }),
			'PNG',
			// stage.toDataURL({ pixelRatio: 2 }),
			699,
			1438,
			1083,
			633
		)

		pdf = addWaterMark(pdf)

		const url = await postToCloudinary(pdf.output('blob'))

		setPDFUrl(url)
		console.log(url)

		navigate('checkout')
	}

	return (
		<>
			<h3>Hello</h3>
			<button type="button" onClick={() => setActiveSide()}>
				Cambiar Lado
			</button>
			<Wrapper>
				{selectedType === 'text' && <TextToolbar />}
				{selectedType === 'shape' && <ShapesToolbar />}
				{selectedType === 'image' && <ImagesToolbar />}
				<MainToolbar />
				<div>
					<CardStage
						stageRef={frontStageRef}
						eraseSelection={eraseSelection}
						elements={frontSideCard}
						selectShape={selectShape}
						selectImage={selectImage}
						active={isFrontSideActive}
					/>
					<CardStage
						stageRef={backStageRef}
						eraseSelection={eraseSelection}
						elements={backSideCard}
						selectShape={selectShape}
						selectImage={selectImage}
						active={!isFrontSideActive}
					/>
				</div>

				<button title="pdf" className="button" onClick={exportToPDF}>
					Previewer
				</button>
			</Wrapper>
			<button title="pdf" className="button" onClick={exportToPDF}>
				Previewer
			</button>
			<h3>Bye</h3>
		</>
	)
}

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
`
