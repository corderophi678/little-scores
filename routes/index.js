const express = require('express')
const router = express.Router()

const {getData} = require('../api/getData')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const Leagues = await getData()
  res.render('index', {
    title: 'Little Scores',
    leagues: Leagues || [],
  })
})

module.exports = router
