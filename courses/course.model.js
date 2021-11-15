/* 
 * This file contains the model for the schema in the database
 *
 * 
 */

import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  code: {
    type: String, // Setting what type the column should be
    required: true, // Setting that it is required
    unique: true, // Setting that it has to be unique
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