const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captionModel = require('../models/captian.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized by authUser middleware" });

    const isBlacklistToken = await blacklistTokenModel.findOne({ blacklistedTokens: token })

    if (isBlacklistToken) {
        return res.status(401).json({ message: "Unauthoriza access by isblacklisted" });
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized by authUser middleware"
        })
    }
}

module.exports.authCaptian = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];


    if (!token) {
        return res.status(402).json({ message: "Unauthorized by authCaptian middleware" })
    }

    const isBlackListed = await blacklistTokenModel.findOne({ token: token })

    // console.log(isBlackListed);

    if (isBlackListed) {
        return res.status(402).json({ message: "Unauthorized by authCaptain middleware blacklist token" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decoded);

        const captian = await captionModel.findById(decoded._id);
        req.captian = captian;
        return next();
    } catch (error) {
        console.log(error);

        return res.status(401).json({ message: "Unauthorized by authCaptian middleware check" })
    }


}
