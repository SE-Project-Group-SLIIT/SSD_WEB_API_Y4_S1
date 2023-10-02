const vehicleService = require("../services/vehicleService");
const {
  ResponseStatusCodes,
} = require("../util/constants/responseStatusCodes");
const {
  ResponseCommonMessages,
} = require("../util/constants/responseCommonMessages");

// Create controller for adding a new vehicle
module.exports.addVehicleController = async (req, res) => {
    console.log(">>>>",req.body);
  try {
    const vehicleResponse = await vehicleService.addVehicleService(req.body);
    console.log(">>>>",req.body);
    return res.status(200).json({
      success: true,
      data: vehicleResponse.data,
      showMessage: false,
    });
  } catch (err) {
    return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

// Create controller for viewing all vehicle details
module.exports.viewAllVehiclesController = async (req, res) => {
  try {
    const vehicleResponse = await vehicleService.viewAllVehiclesService(req);
    return res.status(200).json({
      success: true,
      data: vehicleResponse.data,
      showMessage: false,
    });
  } catch (err) {
    return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

// Create controller for updating vehicle details
module.exports.updateVehicleController = async (req, res) => {
    console.log(">>>>request",req);
  try {
    const vehicleResponse = await vehicleService.updateVehicleService(req.body);
    return res.status(200).json({
      success: true,
      data: vehicleResponse.data,
      showMessage: false,
    });
  } catch (err) {
    return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

// Create controller for deleting a vehicle
module.exports.deleteVehicleController = async (req, res) => {
  try {
    const vehicleResponse = await vehicleService.deleteVehicleService(req.body);
    return res.status(200).json({
      success: true,
      data: vehicleResponse.data,
      showMessage: false,
    });
  } catch (err) {
    return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

// Create controller for viewing a single vehicle details
module.exports.singleVehicleViewController = async (req, res) => {
  try {
    const vehicleResponse = await vehicleService.singleVehicleViewService(req);
    return res.status(200).json({
      success: true,
      data: vehicleResponse.data,
      showMessage: false,
    });
  } catch (err) {
    return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

// Other vehicle-related controllers can be added here as needed
