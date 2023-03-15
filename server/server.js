require('dotenv').config()
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const port = process.env.PORT;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

db.once('open', async () => {
  console.log('Connected to database')
  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });
  console.log(`Apollo server ready at: ${url}`);
})