import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import { useStage } from '../../context/StageContext'

const ExamplePDFViewer = () => {
	const { pdfUrl } = useStage()
	return (
		<div style={{ height: '70%' }}>
			<PDFViewer
				document={{
					url: pdfUrl
				}}
			/>
		</div>
	)
}

export default ExamplePDFViewer
