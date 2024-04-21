/*
  Command line: `netlify dev`
  Entry point: http://localhost:8888/.netlify/functions/aliyun-dm-sendmail?email=[email address] 

  Command line: `netlify functions:serve`
  Entry point: http://localhost:9999/.netlify/functions/aliyun-dm-sendmail?email=[email address]

  Refer to:
  - Aliyun DM Service Console: https://dm.console.aliyun.com/#/directmail/Home/
  - Aliyun RAM User Access Key Console: https://ram.console.aliyun.com/users
  - Aliyun API SDK source code https://next.api.aliyun.com/api/Dm/2015-11-23/SingleSendMail?tab=DEMO&lang=NODEJS
  - Netlify Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
*/
'use strict';

const Dm20151123 = require('@alicloud/dm20151123');
const OpenApi = require('@alicloud/openapi-client');
const Util = require('@alicloud/tea-util');

function constructMailBody(email, datetime) {
  return `
Hi, there\n\n
You got a potential new customer opportunity.\n\n
-------------------------------\n
Email: ${email}\n
-------------------------------\n\n
Your mailerbot assistant, Aliyun\n
${datetime}\n
  `;
}

function getParameterFromRequestURL(url, key) {
  const obj_url = new URL(url);
  const params = new URLSearchParams(obj_url.search);
  return params.get(key);
}

class Client {
  /**
   * 使用AK&SK初始化账号Client
   * @return Client
   * @throws Exception
   */
  static createClient() {
    let config = new OpenApi.Config({
      accessKeyId: process.env.ALIYUN_DM_ACCESSKEY_ID,
      accessKeySecret: process.env.ALIYUN_DM_ACCESSKEY_SECRET
    });
    // Endpoint 请参考 https://api.aliyun.com/product/Dm
    config.regionId = 'cn-hangzhou';
    config.endpoint = 'dm.aliyuncs.com';
    return new Dm20151123.default(config);
  }

  static async main(req) {
    let mailFrom = 'no-reply@mail.wwii.site';
    /*
      Local test result: Partial Success 
      Details: OK with one recipient but rejected by MTA server with certain or multiple recipients
      Return error message: 400 the mta server of unexpected closed
    */
    let mailTo = 'm13926430883@163.com';
    let mailSubject = 'Neuron Website Subscription (Aliyun DM Service + Netlify Function)';
    let now_iso_string = new Date().toISOString();
    let email = getParameterFromRequestURL(req.url, 'email') || 'user@mail.wwii.site'
    // Call Aliyun API via client library
    let client = Client.createClient();
    let singleSendMailRequest = new Dm20151123.SingleSendMailRequest({
      accountName: mailFrom,
      addressType: 1,
      replyToAddress: 'true',
      toAddress: mailTo,
      subject: mailSubject,
      textBody: constructMailBody(email, now_iso_string)
    });
    let runtime = new Util.RuntimeOptions({ });
    let return_obj = await client.singleSendMailWithOptions(singleSendMailRequest, runtime);
    // console.log(return_obj) // For debug
  }
}

exports.default = async (req) => {
  try {
    await Client.main(req)
    return new Response(JSON.stringify({
      status: 200,
      msg: 'Your subscription request sent OK!'
    }), {
      headers: { "content-type": "application/json" }
    })                
  } catch (error) {
    return new Response(JSON.stringify({
      status: 500,
      msg: error.message
    }), {
      headers: { "content-type": "application/json" }
    })
  }
}

