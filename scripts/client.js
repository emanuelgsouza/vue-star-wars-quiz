const { createApolloFetch } = require('apollo-fetch')

const client = createApolloFetch({
  // https://github.com/graphql/swapi-graphql/issues/83
  uri: 'https://swapi.apis.guru/'
})

module.exports = client
