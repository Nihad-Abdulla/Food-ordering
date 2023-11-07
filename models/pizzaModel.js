const { default: mongoose } = require("mongoose");

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    variants: [String], // Assuming variants are strings
    prices: [Object], // Assuming prices will be an array of objects
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true,
});

const pizzaModel = mongoose.model('pizzas', pizzaSchema);

module.exports = pizzaModel;
