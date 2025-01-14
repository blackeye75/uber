const captianModel = require("../models/captian.model")
const captianServices = require('../services/captian.service');
const { validationResult } = require('express-validator')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(res);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptianAlredyExits = await captianModel.findOne({ email })
    if (!isCaptianAlredyExits) {
        return res.status(400).json({ message: "Captian already exits" })
    }
    const hashPassword = await captianModel.hashPassword(password);
    const captian = await captianServices.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType


    })
}