const Vehicle = require("../models/Vehicle");

// Create service for adding a new vehicle
module.exports.addVehicleService = async (requestData) => {
  try {
    const newVehicle = new Vehicle(requestData);
    const response = await newVehicle.save();
    return {
      msg: "Vehicle Added",
      data: response,
    };
  } catch (error) {
    throw error;
  }
};

// Create service for viewing all vehicle details
module.exports.viewAllVehiclesService = async () => {
  try {
    const response = await Vehicle.find();
    return {
      msg: "success",
      data: response,
    };
  } catch (err) {
    throw err;
  }
};

// Create service for updating vehicle details
module.exports.updateVehicleService = async (requestData) => {
  try {
    const id = requestData._id;
    const idString = id.toString();
    const response = await Vehicle.findByIdAndUpdate(
      { _id: idString },
      requestData,
      { new: true }
    );
    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "failed",
        data: response,
      };
    }
  } catch (err) {
    throw err;
  }
};

// Create service for deleting a vehicle
module.exports.deleteVehicleService = async (requestData) => {
  try {
    const id = requestData._id;
    const idString = id.toString();
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      { _id: idString },
      { status: "removed" },
      { new: true }
    );
    if (updatedVehicle) {
      return {
        msg: "success",
        data: updatedVehicle,
      };
    } else {
      return {
        msg: "failed",
        data: null,
      };
    }
  } catch (err) {
    throw err;
  }
};

// Create service for viewing a single vehicle details
module.exports.singleVehicleViewService = async (requestData) => {
  try {
    const id = requestData._id;
    const idString = id.toString();
    const response = await Vehicle.findOne({ _id: idString });
    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "failed",
        data: response,
      };
    }
  } catch (err) {
    throw err;
  }
};

// Create service for getting inactive vehicles
module.exports.getInactiveVehiclesService = async () => {
  try {
    const inactiveVehicles = await Vehicle.find({ status: "removed" });
    return {
      msg: "success",
      data: inactiveVehicles,
    };
  } catch (err) {
    throw err;
  }
};

// Create service for getting active vehicles
module.exports.getActiveVehiclesService = async () => {
  try {
    const activeVehicles = await Vehicle.find({ status: "active" });
    return {
      msg: "success",
      data: activeVehicles,
    };
  } catch (err) {
    throw err;
  }
};

// Create service for activating a vehicle
module.exports.activateVehicleService = async (requestData) => {
  try {
    const id = requestData._id;
    const idString = id.toString();
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      { _id: idString },
      { status: "active" },
      { new: true }
    );
    if (updatedVehicle) {
      return {
        msg: "success",
        data: updatedVehicle,
      };
    } else {
      return {
        msg: "failed",
        data: null,
      };
    }
  } catch (err) {
    throw err;
  }
};
