# vue-neuron: Static site powered by VUE / Vite + Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/f63cda47-090d-41bf-aae2-56ef82e9896b/deploy-status)](https://app.netlify.com/sites/vue-neuron/deploys)

## Demo

Demo website published to: [https://vue-neuron.netlify.app](https://vue-neuron.netlify.app)

## Project Setup, Development & Deployment

### Setup

```sh
npm install netlify-cli -g

npm install
```

### Development

```sh
netlify dev
```

### Build for Production

```sh
netlify build
```

### Deploy to Netlify

Automatically CI deployment with Github repository was **Enabled**.

## Project Contents

### Netlify Functions / Edge Functions / Email Integration Plugin

#### Functions

- [mailgun-sendmail](netlify/functions/mailgun-sendmail/) Send mail via Email Integration (Provider: Mailgun)

- [aliyun-dm-sendmail](netlify/functions/aliyun-dm-sendmail/)

#### Email Integration Plugin

- [Email Integration (Provider: Mailgun)](https://app.netlify.com/sites/vue-neuron/integrations/emails)

#### Edge Functions

- [aliyun-dm-sendmail-edge](netlify/edge-functions/aliyun-dm-sendmail-edge.js)

Netlify Docs refer to: [Function](https://docs.netlify.com/functions/overview/), [Edge Functions](https://docs.netlify.com/edge-functions/overview/), [Email Integration](https://docs.netlify.com/integrations/email-integration/)

## Appendix

### Netlify One-Click Deployment for Github public repository

```md
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dyslab/vue-neuron)
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dyslab/vue-neuron)

### Netlify Function CLI

```sh
# Netlify functions help
netlify help functions

# Create new function
netlify functions:create

# List functions
netlify functions:list

# Start Netlify development environment
netlify dev

# Netlify function test via browser
http://localhost:8888/.netlify/functions/aliyun-dm-sendmail
# Or, Test 'GET' methon by CLI
netlify functions:invoke --port 8888 aliyun-dm-sendmail
# Test 'POST' methon with a json file body
netlify functions:invoke -p assets/example.json --port 8888 aliyun-dm-sendmail

# Alternatively, solely start Netlify functions serve
netlify functions:serve # All above command line argument '--port' set to '9999' instead
```

### Vite Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
