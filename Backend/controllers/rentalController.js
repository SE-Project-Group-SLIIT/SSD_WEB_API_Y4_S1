const rentalService = require("../services/rentalService");
const {
    ResponseStatusCodes,
} = require("../util/constants/responseStatusCodes");
const {
    ResponseCommonMessages,
} = require("../util/constants/responseCommonMessages");

//create controller for create new Rental

module.exports.addRentalcontroller = async (req, res) => {
    try {
        const routeResponse = await rentalService.addRentalDetails(
            req.body,
        );
        console.log(req.body);
        return res.status(200).json({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });

    } catch (err) {
        return res
            .status(
                err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
            )
            .json({
                success: false,
                msg:
                    err.msg ||
                    ResponseCommonMessages.INTERNAL_SERVER_ERROR,
            });

    }
};

//Controller for view all rental details
module.exports.viewallRentalCntroller = async (req, res) => {
    try{
        let routeResponse = await rentalService.viewAllRentalDetails(req);
        return res.status(200).send({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    }catch (err){
        return res.status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg: err.msg || 
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};

//Controller for update rental details
module.exports.updateRentalcontroller =async (req, res)=> {
    try{
        let routeResponse = await rentalService.updateRentalDetails(req.body);
        return res.status(200).send({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    }catch(err){
        return res.status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg: err.msg || 
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};

//Controller for delete rental details
module.exports.deleteRentalController = async(req, res) => {
    try{
        let rentalResponse = await rentalService.deleteRentalService(
            req.body
        );
        return res.status(200).send({
			success: true,
			data: rentalResponse.data,
			showMessage: false,
		});

    }catch(err){
        return res
        .status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg:
                err.msg ||
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};

//controller for view single Rental details
module.exports.singleRentalViewController = async(req, res) => {
    try{
        let rentalResponse = await rentalService.singlwRouteVewService(req.body);
      
        return res.status(200).send({
			success: true,
			data: rentalResponse.data,
			showMessage: false,
		});

    }catch(err){
        return res
        .status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg:
                err.msg ||
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
}