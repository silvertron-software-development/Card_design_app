require('dotenv').config()
const mercadopago = require('mercadopago')

exports.handler = async function (event, context) {
	const bodyJson = JSON.parse(event.body)
	mercadopago.configure({
		access_token: process.env.REACT_APP_MERCADO_PAGO_ACCESS_TOKEN
	})

	console.log('Hola funcion nueva')
	let { url } = bodyJson
	url = url.replace('https://', '')

	const preference = {
		binary_mode: true,
		items: [
			{
				title: 'Tarjetas de negocio',
				description: url,
				quantity: 1000,
				currency_id: 'MXN',
				unit_price: 1
			}
		],
		back_urls: {
			success: `${process.env.REACT_APP_BASE_URL}/payment-success/`,
			failure: 'https://www.waltergplata.com',
			pending: 'https://www.waltergplata.com'
		},
		auto_return: 'approved'
	}

	const response = await mercadopago.preferences.create(preference)

	return {
		statusCode: 200,
		body: JSON.stringify(response)
	}
}
