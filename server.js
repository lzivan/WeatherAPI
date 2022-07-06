const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const redis = require("redis");
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.get).bind(client);
const expireAsync = promisify(client.expire).bind(client);
