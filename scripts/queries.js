const PEOPLE_QUERY = `
  {
    allPeople {
      totalCount
      people {
        name
        homeworld {
          name
        }
      }
    }
  }
`

const PLANET_QUERY = `
  {
    allPlanets {
      totalCount
      planets {
        name
      }
    }
  }
`

module.exports = {
  PEOPLE_QUERY,
  PLANET_QUERY
}
