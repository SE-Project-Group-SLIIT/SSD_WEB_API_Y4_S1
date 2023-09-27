const Rental = require('../models/Rental');
let rental = require('../models/Rental');

module.exports.addRentalDetails = async (requestbody, requestUser) => {
    try{
        const id = requestbody.id;
        const from = requestbody.from;
        const to = requestbody.to;
        const status = requestbody.status;
        const payment = requestbody.payment;
        const vehicleType = requestbody.vehicleType;
        const model = requestbody.model;
        const pickAddress = requestbody.pickAddress;
        const addPrice = requestbody.addPrice;
        const advPayment = requestbody.advPayment;
        const finalPrice = requestbody.finalPrice;
        const customerName = requestbody.customerName;
        const customerNIC = requestbody.customerNIC;
        const customerAdd = requestbody.customerAdd;
        const contactNo = requestbody.contactNo;
        const NICcopy = requestbody.NICcopy;
        const penaltyDays = requestbody.penaltyDays;
        const penaltyCharges = requestbody.penaltyCharges;
        const returnDate = requestbody.returnDate;
        const lastPaid = requestbody.lastPaid;

        const newRental = await new Rental({
            id,
            from,
            to,
            status,
            payment,
            vehicleType,
            model,
            pickAddress,
            addPrice,
            advPayment,
            finalPrice,
            customerName,
            customerNIC,
            customerAdd,
            contactNo,
            NICcopy,
            penaltyDays,
            penaltyCharges,
            returnDate,
            lastPaid,
        });
    }
    catch(err){
        throw err;
    }
}