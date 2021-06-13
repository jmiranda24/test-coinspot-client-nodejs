const coinspot_v1 = require('./coinspot_v1.js')
const coinspot_v2 = require('./coinspot_v2.js')
require('dotenv').config()

const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var v1_client = new coinspot_v1(key, secret)
var v2_client = new coinspot_v2(key, secret)

// client.status_fa()
// client.status_ro()

// client.quotebuy('DOGE', 10, 'aud')
// v1_client.myorders()
v2_client.get_sendreceives()