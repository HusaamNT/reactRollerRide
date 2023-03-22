require('dotenv').config();
const path = require('path');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');

const express = require('express');
const http = require('http');
const cors = require('cors');
const { json } = require('body-parser');

const { authMiddleware } = require('./utils/auth');

const app = express();
const httpServer = http.createServer(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const port = process.env.PORT;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

(async () => {
  await server.start();
  app.use(
    '/graphql',
    cors(),
    json(),
    expressMiddleware(server, {
      constext: authMiddleware
    })
  );
  await new Promise((resolve) => httpServer.listen({ port }, resolve));
  db.once('open', async () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
  });
})()