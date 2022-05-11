// const model = require('../Models/model');
const insertModel = require('../Models/addDataModel');


exports.getAllData = async (req, res) => {
    try {
        const data = await insertModel.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getDataById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await insertModel.findById(id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.postData = (req, res) => {
    try {
        const data = {
            name: req.body.name,
            varients: ["small",
                "medium",
                "large"],
            price: [{
                "small": 200,
                "medium": 350,
                "large": 400
            }],
            category: req.body.category,
            image: "dfjdjfh",
            description: req.body.description
        }
        const dataToSave = insertModel(data).save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
