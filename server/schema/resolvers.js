const User = require("../models/User");
const { signToken } = require("../utils/auth.js");
const Bookings = require("../models/Bookings");
const Package = require("../models/packages");
const Blog = require("../models/Blog");

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
  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token };
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
  },
};

module.exports = resolvers;
