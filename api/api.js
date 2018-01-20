const express = require('express')
const mongoose = require('mongoose')

const {resultsById} = require('./resultsById')
const {allCompData} = require('./allCompData')

const MLAB_URL = process.env.MLAB_TEST_DB

const api = express();
mongoose.connect(MLAB_URL)
mongoose.Promise = global.Promise

api.use('/:leagueId', resultsById)
