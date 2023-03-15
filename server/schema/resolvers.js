const User = require("../models/User");
const { signToken } = require("../utils/auth.js");
const Bookings = require("../models/Bookings");
const Package = require("../models/packages");
const Blog = require("../models/Blog");
const fetch = require("node-fetch");


const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error("No profile with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    getAllPackages: async () => {
      return await Package.find();
    },
    getAllBlogs: async () => {
      return await Blog.find();
    },
    getOneBlog: async ({ _id }) => {
      return await Blog.findById(_id);
    },
    getWeather: async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=76119befad1d3879033ce0396274f555&units=metric"
      );

      const data = await response.json();
      const array = [];
      for (let i = 0; i < data.list.length; i += 8) {
        const weather = {
          weather: data.list[i].weather[0].main,
          temp: data.list[i].main.temp,
        };
        array.push(weather);
      }
      return array;
    },
    customerPaymentMethods: async (_, { customerId }) => {
      const paymentMethods = await stripe.paymentMethods.list({
        customer: customerId,
        type: 'card',
      });
      return paymentMethods.data;
    },
  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    bookTicket: async (
      _,
      { package, dateField, childrenTickets, adultTickets }
    ) => {
      const bookTicket = await Bookings.create({
        package,
        dateField,
        childrenTickets,
        adultTickets,
      });
      return bookTicket;
    },
    deleteBooking: async (_, { id }) => {
      const deleteBooking = await Bookings.findByIdAndDelete({
        _id: id,
      });
      return deleteBooking;
    },
    deleteUser: async (_, { id }) => {
      const deleteUser = await User.findByIdAndDelete(id);
      return deleteUser;
    },
    createBlog: async (_, { userId, title, post }) => {
      const createBlog = await Blog.create({
        userId,
        title,
        post,
      });
      return createBlog;
    },
    deleteBlog: async (_, { userId }) => {
      const deleteBlog = await Blog.findOneAndDelete({
        userId,
      });
      return deleteBlog;
    },
    createCustomer: async (_, { email, name, cardId }) => {
      const customer = await stripe.customers.create({
        email: email,
        name: name,
        source: cardId,
      });
      return customer;
    },
    chargeCustomer: async (_, { amount, customerId, cardId }) => {
      const charge = await stripe.charges.create({
        amount: amount,
        currency: 'usd',
        customer: customerId,
        source: cardId,
      });
      return charge;
    },
  },
};

module.exports = resolvers;
