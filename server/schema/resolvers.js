// const { Profile } = require('../models');
const User = require("../models/User");
const { signToken } = require("../utils/auth.js");

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
  },
};

module.exports = resolvers;
