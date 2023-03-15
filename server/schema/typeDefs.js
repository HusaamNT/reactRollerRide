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
  type Blog {
    user: User
    title: String!
    post: String!
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    users: [User]
    login(username: String!, password: String!): Auth
    getAllPackages: [Packages]
    getAllBlogs: [Blog]
    getOneBlog(_id: ID!): Blog
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
    createBlog(userId: ID!, title: String!, post: String!): Blog
    deleteBlog(userId: ID!): Blog
  }
`;

module.exports = typeDefs;
