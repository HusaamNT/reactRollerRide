const { Schema, Model } = require("mongoose");

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
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

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.Model("User", userSchema);

module.exports = User;
