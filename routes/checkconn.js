var express = require('express');
const run = require('../checkconn');
const { MongoClient } = require('mongodb')
var router = express.Router();
require('dotenv').config()
const uri = process.env.URI
const client = new MongoClient(uri)

/* GET users listing. */
router.get('/', async function(req, res) {
    await run(client)
    res.send("Rodou")
});
