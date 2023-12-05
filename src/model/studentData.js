const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Status: String,
    Batch: Number,
    Department: String,
    Degree: String,
    StudentID: String,
    Name: String,
    Gender: String,
    DOB: Number,
    Program: String
}, {
    collection: "studentData"
}
);

module.exports = mongoose.model('Student', studentSchema);