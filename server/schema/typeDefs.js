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
  type Weather {
    temp: String
    weather: String
  }
  type Auth {
    token: ID!
    user: User!
  }
  type PaymentMethod {
    id: ID
    object: String
    billing_details: BillingDetails
    card: Card
    created: String
    customer: String
    livemode: Boolean
    metadata: String
    type: String
  }
  
  type BillingDetails {
    address: Address
    email: String
    name: String
    phone: String
  }
  
  type Address {
    city: String
    country: String
    line1: String
    line2: String
    postal_code: String
    state: String
  }
  
  type Card {
    brand: String
    checks: CardChecks
    country: String
    exp_month: Int
    exp_year: Int
    fingerprint: String
    funding: String
    last4: String
    networks: CardNetworks
    three_d_secure_usage: ThreeDSecureUsage
  }
  
  type CardChecks {
    address_line1_check: String
    address_postal_code_check: String
    cvc_check: String
  }
  
  type CardNetworks {
    available: [String]
    preferred: String
  }
  
  type ThreeDSecureUsage {
    supported: Boolean
  }
  type Query {
    users: [User]
    login(username: String!, password: String!): Auth
    getAllPackages: [Packages]
    getAllBlogs: [Blog]
    getOneBlog(_id: ID!): Blog
    getWeather(location: String): [Weather]
    customerPaymentMethods(customerId: ID!): [PaymentMethod]
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
