const Vehicle = require("../models/Vehicle");
const { v4: uuidv4 } = require('uuid');


module.exports.addVehicleService = async (requestData) => {
    try {
      // Generate a unique vehicleID using uuidv4
      const vehicleID = uuidv4();
  


      // Add the generated vehicleID to the requestData
      requestData.VehicleID = vehicleID;
  
      console.log(">>>reqdata",requestData);
      const newVehicle = new Vehicle(requestData);
      const response = await newVehicle.save();
      console.log("response", response);
      return {
        msg: "Vehicle Added",
        data: response,
      };
    } catch (error) {
        console.log("err",error);
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
    console.log(">>>>Id",requestData);
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
