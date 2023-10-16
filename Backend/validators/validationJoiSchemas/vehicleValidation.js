const Joi = require("joi");

const vehicleValidation = {
  schemaValidation: Joi.object().keys({
    OwnerName: Joi.string().min(2).max(50).trim().required(),
    OwnerNIC: Joi.string().max(12).required(),
    TeleNo: Joi.string().min(10).max(15).required(),
    Address: Joi.string().min(2).max(100).required(),
    Email: Joi.string().email().required(),
    Date: Joi.date().required(),
    VehicleID: Joi.string(),
    VehicleRegNo: Joi.string().required(),
    VehicleModel: Joi.string().min(2).max(50).required(),
    VehicleType: Joi.string().min(2).max(50).required(),
    VehicleBrand: Joi.string().min(2).max(50).required(),
    Mileage: Joi.number().min(0).required(),
    InsType: Joi.string().min(2).max(50).required(),
    InsComName: Joi.string().min(2).max(50).required(),
    Transmission: Joi.string().min(2).max(50).required(),
    AirC: Joi.string().min(2).max(50).required(),
    NoOfSeats: Joi.number().min(1).required(),
    RatePDay: Joi.number().min(0).required(),
    YearsRent: Joi.number().min(1).required(),
    status: Joi.string().valid("active", "removed").default("active"),
  }),

  updateSchemaValidation: Joi.object().keys({
    id: Joi.string(),
    OwnerName: Joi.string().min(2).max(50).trim(),
    OwnerNIC: Joi.string().max(12),
    TeleNo: Joi.string().min(10).max(15),
    Address: Joi.string().min(2).max(100),
    Email: Joi.string().email(),
    Date: Joi.date(),
    VehicleID: Joi.string(),
    VehicleRegNo: Joi.string(),
    VehicleModel: Joi.string().min(2).max(50),
    VehicleType: Joi.string().min(2).max(50),
    VehicleBrand: Joi.string().min(2).max(50),
    Mileage: Joi.number().min(0),
    InsType: Joi.string().min(2).max(50),
    InsComName: Joi.string().min(2).max(50),
    Transmission: Joi.string().min(2).max(50),
    AirC: Joi.string().min(2).max(50),
    NoOfSeats: Joi.number().min(1),
    RatePDay: Joi.number().min(0),
    YearsRent: Joi.string().min(2).max(50),
    status: Joi.string().valid("active", "removed"),
  }),
};

// Export validations
module.exports = vehicleValidation;
