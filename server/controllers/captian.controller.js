const blacklistTokenModel = require("../models/blacklistToken.model");
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
    if (isCaptianAlredyExits) {
        return res.status(400).json({ message: "Captian already exits" })
    }
    const hashPassword = await captianModel.hashPassword(password);
    const captian = await captianServices.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        password: hashPassword,
        email,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = captian.generateAuthToken();
    res.status(201).json({ token, captian });
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(res);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    const captian = await captianModel.findOne({ email }).select("+password");
    if (!captian) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await captian.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = captian.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, captian });
}

module.exports.getCaptianProfile = async (req, res, next) => {
    res.status(200).json({ captian: req.captian });
}

module.exports.logoutCaptian = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split;

    await blacklistTokenModel.create({ token });

    res.clearCookie('token');
    res.status(200).json({ message: "Logged out Successfully" });
}