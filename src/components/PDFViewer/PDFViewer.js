import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import { useStage } from '../../context/StageContext'

const ExamplePDFViewer = () => {
    const {pdfUrl} = useStage()
    return (
        <PDFViewer
            document={{
                url: pdfUrl,
            }}
        />
    )
}

export default ExamplePDFViewer