import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    favorite_sport: {
        type: String,
        required: true
    }
}
)


export default mongoose.model("User", UserSchema)