import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
    
}))

app.listen(5000);
console.log('Running GraphQL API server at http://localhost:5000/graphql')


