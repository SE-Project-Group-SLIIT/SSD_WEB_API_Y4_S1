const Joi = require('joi');
const rentalValidationSchema = {
    saveRentalDetails: Joi.object().keys({
        id: Joi.string().required(),
        from: Joi.string().required(),
        to: Joi.string().required(),
        status: Joi.string().valid('Pending', 'Completed').required(),
        payment: Joi.string().valid('Cash payment', 'Card payment').required(),
        vehicleType: Joi.string().valid('Car', 'Van', 'Bus').required(),
        model: Joi.string().required(),
        pickAddress: Joi.string().max(200),
        addPrice: Joi.number(),
        advPayment: Joi.number().required(),
        finalPrice: Joi.number().required(),
        customerName: Joi.string().required().max(200),
        customerNIC: Joi.string().max(12).required(),
        customerAdd: Joi.string().max(200),
        contactNo: Joi.number().required(),
        NICcopy: Joi.string(),
        penaltyDays: Joi.number(),
        penaltyCharges: Joi.number(),
        returnDate: Joi.string(),
        lastPaid: Joi.number(),
    }),
};

//export validations
module.exports = rentalValidationSchema;