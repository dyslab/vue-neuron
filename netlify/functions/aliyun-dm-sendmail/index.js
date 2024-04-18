// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const email = event.queryStringParameters.email || 'Aliyun DM Mailer'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${email}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

export { handler }