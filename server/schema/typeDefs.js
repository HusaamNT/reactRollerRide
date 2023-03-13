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
    user: User
    package: Packages!
    dateField: String!
    childrenTickets: Int
    adultTickets: Int
  }
  type Packages {
    _id: ID!
    ticketName: String!
    passType: String!
    ticketPrice: Int!
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    users: [User]
    login(username: String!, password: String!): Auth
    getAllPackages: [Packages]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    bookTicket(
      package: ID!
      user: ID!
      dateField: String!
      childrenTickets: Int
      adultTickets: Int
    ): Bookings
    deleteBooking(id: ID!): Bookings
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;
