/*
  Command line: `netlify dev`
  Entry point: http://localhost:8888/.netlify/functions/aliyun-dm-sendmail?email=[email address] 

  Command line: `netlify functions:serve`
  Entry point: http://localhost:9999/.netlify/functions/aliyun-dm-sendmail?email=[email address]

  Aliyun DM Service Console: https://dm.console.aliyun.com/#/directmail/Home/
  Aliyun RAM User Access Key Console: https://ram.console.aliyun.com/users
  Netlify Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
*/
const constructMailBody = (email, datetime) => {
  return `
Dear sir, \n\n
You got a potential new customer opportunity.\n\n
-------------------------------\n
Email: ${email}\n
-------------------------------\n\n
Your mailerbot assistant, Aliyun\n
${datetime}\n
  `;
}

const uuid4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, 
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
}

const fixedEncodeURIComponent = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

const constructSignString = (httpMethod, queryMaps) => {
  // Encoding parameters
  let canonicalizedQueryString = '';
  let index = 0;
  for (const [key, value] of queryMaps) {
      if (index > 0) canonicalizedQueryString += '&';
      canonicalizedQueryString += `${fixedEncodeURIComponent(key)}=${fixedEncodeURIComponent(value)}`;
      index ++;
  }

  return `${httpMethod}&${fixedEncodeURIComponent("/")}&${fixedEncodeURIComponent(canonicalizedQueryString)}`;
}

const handler = async (event) => {
  const api_base_url = 'https://dm.aliyuncs.com/'
  const api_accesskey_id = process.env.ALIYUN_DM_ACCESSKEY_ID
  const api_accesskey_secret = process.env.ALIYUN_DM_ACCESSKEY_SECRET
  const mailFrom = 'no-reply@mail.wwii.site'
  const mailTo = 'dys@wwii.site,leo@wwii.site'
  const mailSubject = 'Neuron Website Subscription (Aliyun DM Service)'
  const cookie = event.headers["Cookie"] || event.headers["cookie"];
  const email = event.queryStringParameters.email || 'user@mail.wwii.site'
  const now_iso_string = new Date().toISOString()
  const unsignedParams = new Map([
    ['AccessKeyId', api_accesskey_id],
    ['AccountName', mailFrom],
    ['Action', 'SingleSendMail'],
    ['AddressType', '1'],
    ['Format', 'json'],
    ['RegionId', 'cn-hangzhou'],
    ['ReplyToAddress', 'true'],
    ['SignatureMethod', 'HMAC-SHA1'],
    ['SignatureNonce', String(uuid4())],
    ['SignatureVersion', '1.0'],
    ['Subject', mailSubject],
    ['TextBody', constructMailBody(email, now_iso_string)],
    ['Timestamp', now_iso_string],
    ['ToAddress', mailTo],
    ['Version', '2015-11-23'],
  ])

  try {
    const signed_string = constructSignString('POST', unsignedParams)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${signed_string}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

export { handler }
