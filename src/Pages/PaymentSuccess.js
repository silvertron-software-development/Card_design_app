import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postCloudinaryUrl } from '../services/checkoutServices/postToCheckout'

const PaymentSuccess = () => {
	const [emailSuccess, setEmailSuccess] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const { cloudinaryPath } = useParams()

	useEffect(() => {
		const url = `https://${cloudinaryPath}`
		const data = postCloudinaryUrl(url)
		console.log(data)
		if (data.response.error) {
			setEmailError(true)
			return
		}
		setEmailSuccess(true)
	}, [cloudinaryPath])

	return (
		<section>
			<h2>
				{emailSuccess &&
					'Su Pago ha sido recibido exitosamente, por favor en caso de dudas o comentarios ponerse en contacto con nosotros a ...'}
				{emailError &&
					'Algo salio mal, por favor ponte en contacto con nosotros'}
			</h2>
		</section>
	)
}

export default PaymentSuccess
