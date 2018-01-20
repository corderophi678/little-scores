const fetch = require('make-fetch-happen')
const FB_DATA_API = process.env.football_data_auth_token

async function getData(league, matchday) {
  const BASE_URL = 'http://api.football-data.org/v1/competitions'
  const URL = league ? `${BASE_URL}/${league}/fixtures?matchday=${matchday}` : BASE_URL
  const DEFAULTS = {
    headers: [
      {'X-Auth-Token': FB_DATA_API},
      {'X-Response-Control': 'minified'},
    ],
  }
  const result = await fetch(URL, DEFAULTS).then(res => res.json())
  return result
}

module.exports = {getData}
