import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const isDev = process.env.NODE_ENV === 'development'

export const graphqlClient = new ApolloClient({
  // https://github.com/graphql/swapi-graphql/issues/83
  uri: isDev ? 'http://localhost:9999' : 'https://swapi.apis.guru/'
})

export const apolloProvider = new VueApollo({
  defaultClient: graphqlClient
})

export const install = Vue => {
  Vue.use(VueApollo)
}
