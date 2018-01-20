const express = require('express')
const router = express.Router()

const {getData} = require('../api/getData')

/* GET League Results. */
router.get('/:leagueId/:matchday', async function(req, res, next) {
  const league = req.params.leagueId
  const matchday = req.params.matchday
  const MostRecent = await getData(league, matchday - 1)
  const Current = await getData(league, matchday)
  res.render('table', {
    title: `Results for ${league}`,
    data: {MostRecent: MostRecent.fixtures, Current: Current.fixtures},
  })
})

module.exports = router
