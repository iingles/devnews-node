import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext }from './context'

const port = process.env.PORT || 4000

new ApolloServer({ schema, context: createContext }).listen(
  { port },
  () =>
    console.log(
      `🚀 Server ready at port ${port}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-apollo-server#3-using-the-graphql-api`,
    ),
)
