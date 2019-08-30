import { graphqlClient } from '@/support/apollo'
import gql from 'graphql-tag'
import { get } from 'lodash'

export const loadPersonsQuery = () => {
  return graphqlClient.query({
    query: gql`
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
  })
    .then(data => Promise.resolve(get(data, 'data.allPeople', [])))
    .catch(err => Promise.reject(err))
}

export const loadPlanetsQuery = () => {
  return graphqlClient.query({
    query: gql`
      {
        allPlanets {
          totalCount
          planets {
            name
          }
        }
      }
    `
  })
    .then(data => Promise.resolve(get(data, 'data.allPlanets', [])))
    .catch(err => Promise.reject(err))
}
