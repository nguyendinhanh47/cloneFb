import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true
        },
        fullName: {
            type: String,
            require: true
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required: true,
        },
        major: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "User",
        },
    },
    { timestamps: true }
)

export const UserModel = mongoose.model("User", schema)