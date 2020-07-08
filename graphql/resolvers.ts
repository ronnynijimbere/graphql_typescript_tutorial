const expenses = require('../data/expenses.json')

const getExpenses = () => {
    return expenses;
}

const resolvers = {
    expenses: () => {
        return getExpenses;
    },
}

export default resolvers;