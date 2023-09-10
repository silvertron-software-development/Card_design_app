const { POSTMARK_API_KEY } = process.env
const serverToken = POSTMARK_API_KEY //API Key
let postmark = require('postmark')
let client = new postmark.ServerClient(serverToken)

exports.handler = (event, context, callback) => {
	client
		.sendEmail({
			From: 'contacto@desarrolloplata.com',
			To: 'diegogplatac@desarrolloplata.com',
			Subject: 'test email',
			HtmlBody: 'test',
			TextBody: 'test'
		})
		.then((response) => {
			console.log(response)
			console.log(response.To)
			console.log(response.SubmittedAt)
			console.log(response.Message)
			console.log(response.MessageID)
			console.log(response.ErrorCode)
		})
		.catch((err) => {
			console.log(err)
			return callback(null, {
				statusCode: 400,
				body: 'Error while sending email'
			})
		})

	return callback(null, {
		statusCode: 200,
		body: 'I am on my way !'
	})
}

// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
// const process = require('process')
// const { promisify } = require('util')

// const sendMailLib = require('sendmail')

// const { validateEmail, validateLength } = require('./validations.js')

// const sendMail = promisify(sendMailLib())

// const NAME_MIN_LENGTH = 3
// const NAME_MAX_LENGTH = 50
// const DETAILS_MIN_LENGTH = 10
// const DETAILS_MAX_LENGTH = 1e3

// const handler = async (event) => {
//   if (!process.env.CONTACT_EMAIL) {
//     return {
//       statusCode: 500,
//       body: 'process.env.CONTACT_EMAIL must be defined',
//     }
//   }

//   const body = JSON.parse(event.body)

//   try {
//     validateLength('body.name', body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH)
//   } catch (error) {
//     return {
//       statusCode: 403,
//       body: error.message,
//     }
//   }

//   try {
//     validateEmail('body.email', body.email)
//   } catch (error) {
//     return {
//       statusCode: 403,
//       body: error.message,
//     }
//   }

//   try {
//     validateLength('body.details', body.details, DETAILS_MIN_LENGTH, DETAILS_MAX_LENGTH)
//   } catch (error) {
//     return {
//       statusCode: 403,
//       body: error.message,
//     }
//   }

//   const descriptor = {
//     from: `"${body.email}" <no-reply@gql-modules.com>`,
//     to: process.env.CONTACT_EMAIL,
//     subject: `${body.name} sent you a message from gql-modules.com`,
//     text: body.details,
//   }

//   try {
//     await sendMail(descriptor)
//     return { statusCode: 200, body: '' }
//   } catch (error) {
//     return { statusCode: 500, body: error.message }
//   }
// }

// module.exports = { handler }
