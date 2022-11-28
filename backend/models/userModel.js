const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true},
        password: { type: String, required: true},
        picture: { 
            type: String, 
            required: true, 
            default: "https://img.icons8.com/cotton/512/name--v2.png"
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userModel);

module.exports = User;
