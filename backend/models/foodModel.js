import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    }
})

const foodModel = mongoose.models.foods || mongoose.model("foods", foodSchema);

export default foodModel;