import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
// import InMemoryCache from 'apollo-cache-memory'

// const cache = new InMemoryCache()

export const graphqlClient = new ApolloClient({
  // cache,
  uri: 'http://localhost:9999'
})

export const apolloProvider = new VueApollo({
  defaultClient: graphqlClient
})

export const install = Vue => {
  Vue.use(VueApollo)
}
