const { response } = require("express");
const mongoose = require("mongoose");
const Employee = require("../models/Employee");

module.exports.addEventService = async(req,res) =>{
    console.log("req",req);
  try{

        const eventName = req.eventName;
        const eventDescription =req.eventDescription;
        const eventType = req.eventType;
        const dateFrom = req.dateFrom;
        const dateTo = req.dateTo;
        const Time = req.Time;
        const Location = req.Location;
        const Performer = req.Performer;
        const contactPerson = req.contactPerson;
        const Contact = req.Contact;
        const imageOne = req.imageOne;
        const imageTwo = req.imageTwo;
        const imageThree = req.imageThree;
        const Agenda = req.Agenda;

        const newEvent = new Event({
            eventName, 
            eventDescription, 
            eventType,
            dateFrom,
            dateTo, 
            Time, 
            Location, 
            Performer, 
            contactPerson, 
            Contact,
            imageOne,
            imageTwo,
            imageThree,
            Agenda
        });
       
        const response = await newEvent.save();
        
        return{
            msg: "success",
            data: response,
        };
    } catch (err){
        throw err;
    }
}
