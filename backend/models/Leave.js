const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  leave_type:{
    type: String,
    required: true
  },
  date_from: {
    type: Date,
    required: true
  },
  date_to: {
    type: Date,
    default: null,
  },
  leave_reason: {
    type: String,
    default: null,
  }
},{
    timestamps:true
});

const LeaveModel = mongoose.model("Leave", LeaveSchema);

module.exports = LeaveModel;
