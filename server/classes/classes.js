//this is where we construct our 'packets' of data to send to our query functions
//type check and formatting here
module.exports = {

  Meal : function(body) {
    var obj = {};

    //dates and times to be formatted using moment.js checker thing
    obj.date = body.date;
    obj.time = body.time;

    if (typeof body.description === "string" && body.firstName.length >0) {
      obj.description = body.description;
    } else {
      return false;
    }

    if (typeof body.firstName === "string" && body.firstName.length > 0) {
      obj.firstName = body.firstName.toLowerCase();
    } else {
      return false;
    }

    if (typeof body.lastName === "string" && body.firstName.length >0) {
      obj.lastName = body.lastName;
    } else {
      return false;
    }

    return obj;

  }
  
};