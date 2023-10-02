const Rental = require('../models/Rental');

//create service for add Rental details
module.exports.addRentalDetails = async (requestbody, requestUser) => {
    try {
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

        const response = await newRental.save();
        return {
            msg: "Rental Added",
            data: response,
        };
    }
    catch (err) {
        console.log(err, "error");
        throw err;
    }
};

//service for view all Rentals
module.exports.viewAllRentalDetails = async (req, res) => {
    try {
        let response = await Rental.find();

        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "faild",
                data: response,
            };
        }

    } catch (err) {
        throw err;
    }
};

//service for update  Rental Details
module.exports.updateRentalDetails = async (req) => {
    try {
        console.log("awaw", req);
        let rid = req._id;
        let idString = rid.toString();
        const {
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
        } = req;

        const updateRental = {
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
        };
        let response = await Rental.findByIdAndUpdate(
            { _id: idString },
            updateRental,
        );
        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "faild",
                data: response,
            };
        }
    } catch (err) {
        throw err;
    }
};

//service for delete Rental Details
module.exports.deleteRentalService = async (req, res) => {
    try {
        
        let rid = req._id;
        let idString = rid.toString();

        let response = await Rental.findByIdAndDelete(idString);

		if (response) {
			return {
				msg: "success",
				data: response,
			};
		} else {
			return {
				msg: "fail",
				data: null,
			};
		}
    } catch (err) {
        throw err;
    }
};

//service for search single Rental Details
module.exports.singlwRouteVewService = async(req) => {
    try{
        let rid = req._id;
		let idString = rid.toString();
        
		let response = await Rental.findOne({ _id: idString });

		if (response) {
			return {
				msg: "success",
				data: response,
			};
		} else {
			return {
				msg: "faild",
				data: response,
			};
		}
    }catch(err){
        throw err;
    }
};