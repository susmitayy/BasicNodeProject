const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    isRole: {
        type: String,
        required: true,
    },
}, {
    timestamp: true,
});

module.exports = mongoose.model("User", userSchema);