const { Schema, Model } = require("mongoose");

const bookingsSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    package:{ 
        type: String,
        required: true
    },
    userId:{
    type: Schema.Types.ObjectId,
    ref
    }
})