const captainModel = require('../models/captian.model')


module.exports.createCaptain = async ({ firstname, lastname, email, password ,color,plate,capacity,vehicleType}) =>  {
    if (!firstname || !lastname || !email || !password || !plate || !vehicleType || !capacity) {
        throw new error('All Fields Are required')
    }

    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}