const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },
        varients: {
            required: true,
            type: Array
        },
        price:
        {
            required: true,
            type: Array
        }
        ,
        category: {
            required: true,
            type: String
        },
        image: {
            required: true,
            type: String
        },
        description: {
            required: true,
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('pizzas', dataSchema);

