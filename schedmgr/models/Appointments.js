const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AppointmentSchema = new Schema({Patient_id: {type:Number, required:true},
	Appointment_id:Number,
	Patient_id:Number,
	Patient_phone:Number,
        Diagnosis:String,
	Doctor_id: {type:Number, required:true},
	Date_appt: String,
	Day: String, 
        Time: String
});
module.exports = mongoose.model('Appointments',AppointmentSchema);
