const gql = require("graphql-tag");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    bookings: [Bookings]
  }
  type Bookings {
    _id: ID!
    package: String!
    dateField: String!
    childrenTickets: Int
    adultTickets: Int
  }
  type Auth {
    token: ID!
  }
  type Query {
    users: [User]
    login(username: String!, password: String!): Auth
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
