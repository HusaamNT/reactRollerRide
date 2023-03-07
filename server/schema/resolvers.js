const { Profile } = require('../models');
const { signToken } = require('../utils/auth.js');

const resolvers = {
    Query: {
      users: async () => {
        return await Profile.find()
      },
      login: async (_, { username, password }) => {
        const profile = await Profile.findOne({ username });
  
        if (!profile) {
          throw new AuthenticationError('No profile with this username found!');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(profile);
        return { token, profile };
      }
    },
  
    Mutation: {
      addUser: async (_, { username, email, password }) => {
        const user = await Profile.create({
          username, email, password
        })
        const token = signToken(user);
        return { token }
      },
    },
  };
  
  module.exports = resolvers;
  