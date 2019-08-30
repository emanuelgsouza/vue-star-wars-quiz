const { get } = require('lodash')
const fs = require('fs-extra')
const path = require('path')

const client = require('./client')
const { PEOPLE_QUERY, PLANET_QUERY } = require('./queries')

const loadPeopleQuery = () => {
  return client({ query: PEOPLE_QUERY })
    .then(data => get(data, 'data.allPeople', []))
    .catch(err => Promise.reject(err))
}

const loadPlanetsQuery = () => {
  return client({ query: PLANET_QUERY })
    .then(data => get(data, 'data.allPlanets', []))
    .catch(err => Promise.reject(err))
}

const main = async () => {
  const [ peopleData, planetsData ] = await Promise.all([
    loadPeopleQuery(),
    loadPlanetsQuery()
  ])

  const data = {
    peopleData,
    planetsData
  }

  fs.outputJson(path.join(__dirname, '../src/data/data.json'), data)
}

main()
