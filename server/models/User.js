const { Schema, Model } = require("mongoose");

const userSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
          /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
          "Please fill a valid email address",
        ],
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.Model('User', userSchema);    

module.exports = User;