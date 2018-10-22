const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    class_id: String,
    student_name: String,
    course_of_study: String,
    major: String,
    minor:String
});

exports.module = mongoose.model('student', student);