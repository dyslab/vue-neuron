/*
  Command line: `netlify dev`
  Entry point: http://localhost:8888/aliyun/dm/sendmail?email=[email address] 

  Aliyun DM Service Console: https://dm.console.aliyun.com/#/directmail/Home/
  Aliyun RAM User Access Key Console: https://ram.console.aliyun.com/users
  Aliyun SingleSendMail API Explorer: https://next.api.aliyun.com/api/Dm/2015-11-23/SingleSendMail
  Netlify Docs on edge-functions: https://docs.netlify.com/edge-functions/overview/
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
    `
}

const getParameterFromRequestURL = (url, key) => {
    const obj_url = new URL(url)
    const params = new URLSearchParams(obj_url.search) 
    return params.get(key) 
}

const fixedEncodeURIComponent = (str) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase()
    })
}

const constructSignString = (httpMethod, queryMaps) => {
    // Encoding parameters
    let canonicalizedQueryString = ''
    let index = 0
    for (const [key, value] of queryMaps) {
        if (index > 0) canonicalizedQueryString += '&'
        canonicalizedQueryString += `${fixedEncodeURIComponent(key)}=${fixedEncodeURIComponent(value)}`
        index ++
    }
  
    return `${httpMethod}&${fixedEncodeURIComponent("/")}&${fixedEncodeURIComponent(canonicalizedQueryString)}`
}

const stringToBuff = (string) => {
    return new TextEncoder().encode(string)
}

const buffToBase64 = (buff) => {
    const u8array = new Uint8Array(buff)
    const binString = Array.from(u8array, (byte) =>
        String.fromCodePoint(byte),
    ).join("")
    return btoa(binString)
}

const getSignature = async (secret, string) => {
    const rawkey = stringToBuff(`${secret}&`)
    const rawstring = stringToBuff(string)
    let key = await self.crypto.subtle.importKey(
        'raw',
        rawkey,
        {
          name: "HMAC",
          hash: { name: "SHA-1" },
        },
        true,
        ["sign", "verify"],
    )
    // SHA1 hash encrypted
    return await self.crypto.subtle.sign("HMAC", key, rawstring)
}

const constructRequestBody = (signature, queryMaps) => {
    // Encoding parameters
    let queryString = `Signature=${signature}`
    for (const [key, value] of queryMaps) {
        queryString += `&${key}=${value}`
    }

    return queryString
}

const callAliyunAPI = async (method, params) => {
    const api_base_url = 'https://dm.aliyuncs.com/'
    const response_obj = await fetch(api_base_url, {
        method: method,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params,
        cache: 'no-cache'
    })
    // console.log(response_obj) // For debug
    return response_obj.json()
}

export default async (req) => {
    const api_accesskey_id = Netlify.env.get('ALIYUN_DM_ACCESSKEY_ID')
    const api_accesskey_secret = Netlify.env.get('ALIYUN_DM_ACCESSKEY_SECRET')
    const mailFrom = 'no-reply@mail.wwii.site'
    const mailTo = 'dys@wwii.site,leo@wwii.site'
    const mailSubject = 'Neuron Website Subscription (Aliyun DM Service)'
    const email = getParameterFromRequestURL(req.url, 'email') || 'user@mail.wwii.site'
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
        ['SignatureNonce', String(self.crypto.randomUUID())],
        ['SignatureVersion', '1.0'],
        ['Subject', mailSubject],
        ['TextBody', constructMailBody(email, now_iso_string)],
        ['Timestamp', now_iso_string],
        ['ToAddress', mailTo],
        ['Version', '2015-11-23'],
    ])
    try {
        const signed_string = constructSignString('POST', unsignedParams)
        const buff = await getSignature(api_accesskey_secret, signed_string)
        const signature = buffToBase64(buff)
        const requestParams = constructRequestBody(signature, unsignedParams)
        const return_json = await callAliyunAPI('POST', requestParams)
        return new Response(JSON.stringify({
            status: 200,
            json: return_json,
            msg: 'Your subscription request sent OK!'
        }), {
            headers: { "content-type": "application/json" }
        })                
    } catch(err) {
        return new Response(JSON.stringify({
            status: 500,
            msg: err.toString()
        }), {
            headers: { "content-type": "application/json" }
        })
    }
}

export const config = { path: "/aliyun/dm/sendmail" }
