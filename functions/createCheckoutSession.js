require('dotenv').config()

exports.handler = async function (event, context) {
	const stripe = require('stripe')(process.env.REACT_APP_STRIPE_TEST_KEY)

	const bodyJson = JSON.parse(event.body)
	console.log('Hola funcion nueva')
	console.log(bodyJson)
	const { url, cartInfo: priceId } = bodyJson

	const session = await stripe.checkout.sessions.create({
		mode: 'payment',
		line_items: [
			{
				price: priceId,
				quantity: 1
			}
		],
		metadata: {
			url: url
		},
		success_url: 'https://waltergplata.com',
		cancel_url: 'https://waltergplata.com'
	})
	console.log(session)
	return {
		statusCode: 200,
		body: JSON.stringify(session.url)
	}
}
