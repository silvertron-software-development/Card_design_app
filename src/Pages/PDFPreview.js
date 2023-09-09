import { useStage } from '../context/StageContext'
import React, { useState } from 'react'
import styled from 'styled-components'
import PDFViewer from '../components/PDFViewer/PDFViewer'
import { checkout } from '../services/checkoutServices/postToCheckout'

export const PDFPreview = () => {
	const { pdfUrl } = useStage()

	const [redirectUrl, setredirectUrl] = useState(null)

	const goToCheckout = async () => {
		const url = await checkout('price_1MLxogFPiM3jeCEiCsDS0lDy', pdfUrl)
		setredirectUrl(url)
		console.log(url)
	}

	return (
		<Wrapper>
			<PDFViewer />

			<button type="button" onClick={goToCheckout}>
				Checkout
			</button>
			{redirectUrl && (
				<div>
					Si no fuiste redirigido automaticamente da click{' '}
					<a href={redirectUrl}>AQUI</a>
				</div>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.section``
