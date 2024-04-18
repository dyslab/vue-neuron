// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { sendEmail } from "@netlify/emails"

const handler = async (event) => {
  const mailFrom = 'no-reply@sandbox99cba564f8184003a7c3edd41f575fb2.mailgun.org'
  const mailTo = 'dys@wwii.site'
  const mailSubject = 'Neuron Website Subscription Letter'

  try {
    const email = event.queryStringParameters.email
    const now_iso_string = new Date().toISOString()

    await sendEmail({
      from: mailFrom,
      to: mailTo,
      subject: `${mailSubject} [${now_iso_string}]`,
      template: "test",
      parameters: {
        email: email,
        datetime: now_iso_string
      },
    })

    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        status: 200,
        msg: `Your subscription request sent OK!`
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ 
        status: 500,
        msg: error.toString()
      })
    }
  }
}

export { handler }
