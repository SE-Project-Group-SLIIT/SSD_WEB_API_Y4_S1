const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    OwnerName: {
        type: String,
        required: true,
    },
    OwnerNIC: {
        type: String,
        required: true,
    },
    TeleNo: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
    VehicleID: {
        type: String,
        required: true,
        unique: true,
    },
    VehicleRegNo: {
        type: String,
        required: true,
        unique: true,
    },
    VehicleModel: {
        type: String,
        required: true,
    },
    VehicleType: {
        type: String,
        required: true,
    },
    VehicleBrand: {
        type: String,
        required: true,
    },
    Mileage: {
        type: Number,
        required: true,
    },
    InsType: {
        type: String,
        required: true,
    },
    InsComName: {
        type: String,
        required: true,
    },
    Transmission: {
        type: String,
        required: true,
    },
    AirC: {
        type: String,
        required: true,
    },
    NoOfSeats: {
        type: Number,
        required: true,
    },
    RatePDay: {
        type: Number,
        required: true,
    },
    YearsRent: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'removed'],
        default: 'active',
    },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
