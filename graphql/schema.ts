//create a Schema
//Schema is a kinda pattern that tells us GraphQL what type of queries or mutations we can proceed. 


const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        expenses: [Expense]
    },
    type Expense {
        id: Int,
        date: String,
        amount: Int,
        type: String,
        category: String
    }
`)

export default schema;