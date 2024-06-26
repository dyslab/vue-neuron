/*
  Command line: `netlify dev`
  Entry point: http://localhost:8888/.netlify/functions/mailgun-sendmail?email=[email address] 

  Command line: `netlify functions:serve`
  Entry point: http://localhost:9999/.netlify/functions/mailgun-sendmail?email=[email address]

  Mailgun Email Service Dashboard: https://app.mailgun.com/mg/dashboard
  Netlify Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
*/

const handler = async (event) => {
  const mailFrom = 'no-reply@sandbox99cba564f8184003a7c3edd41f575fb2.mailgun.org'
  const mailTo = 'dys@wwii.site'
  const mailSubject = 'Neuron Website Subscription (Mailgun Service)'

  try {
    const email = event.queryStringParameters.email
    const now_iso_string = new Date().toISOString()
    const cookie = event.headers["Cookie"] || event.headers["cookie"];

    await fetch(
      `${process.env.URL}/.netlify/functions/emails/test`,
      {
        headers: {
          cookie,
          "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify({
          from: mailFrom,
          to: mailTo,
          subject: `${mailSubject} [${now_iso_string}]`,
          parameters: {
            email: email, 
            datetime: now_iso_string
          },
        }),
      }
    )

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
