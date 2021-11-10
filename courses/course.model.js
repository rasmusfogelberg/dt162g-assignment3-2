import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  progression: {
    type: String,
    default: null,
  },
  syllabus: {
    type: String,
    default: null,
  },
  semester: {
    type: String,
    required: true
  }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;