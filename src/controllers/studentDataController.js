const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../model/studentData"); // Adjust the path as necessary

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

const searchStudent = async (req, res) => {
    try {
        let studentId = req.body.studentId;
        studentId = studentId.toUpperCase()

        if (studentId == null) {
            return res.status(404).send({ error: "id entered is null" });
        }

        const student = await Student.findOne({ StudentID: studentId });

        if (student) {
            res.status(200).send(student);
        } else {
            res.status(404).send({ error: "User not found" });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = { searchStudent };
