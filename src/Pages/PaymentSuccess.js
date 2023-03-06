import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { postCloudinaryUrl } from '../services/checkoutServices/postToCheckout'
import logo from '../assets/images/logo_printing.png'

const PaymentSuccess = () => {
	const [emailSuccess, setEmailSuccess] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const { cloudinaryUrl } = useParams()
	console.log(cloudinaryUrl)

	useEffect(() => {
		const postUrl = async () => {
			const url = `https://${cloudinaryUrl}`
			const data = await postCloudinaryUrl(url)
			console.log(data)
			if (data.response?.status >= 400) {
				console.log(data.response?.status)
				setEmailError(true)
				return
			}
			setEmailSuccess(true)
		}
		postUrl()
	}, [cloudinaryUrl])

	return (
		<section className="hero is-success is-fullheight">
			<div className="hero-head">
				<header className="navbar">
					<div className="container">
						<div className="navbar-brand">
							<Link className="navbar-item" to="/">
								<img src={logo} alt="Logo" />
							</Link>
							<span className="navbar-burger">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</div>
						<div id="navbarMenuHeroC" className="navbar-menu">
							<div className="navbar-end">
								<Link to="/" className="navbar-item is-active">
									Inicio
								</Link>
							</div>
						</div>
					</div>
				</header>
			</div>

			<div className="hero-body">
				<div className="container has-text-centered">
					<p className="title">El pago fue exitoso</p>
					<p class="subtitle">
						{emailSuccess &&
							'Su Pago ha sido recibido exitosamente, por favor en caso de dudas o comentarios ponerse en contacto con nosotros a ...'}
						{emailError &&
							'A pesar de que tu pago fue exitoso, algo salio mal al enviar tu información, por favor ponte en contacto con nosotros a ...'}
					</p>
				</div>
			</div>

			<div class="hero-foot"></div>
		</section>
	)
}

export default PaymentSuccess
