import Course from "./course.model.js";

// Function to get all courses
export const findAll = async () => {
  return await Course.find();
};

// Function to get single course
export const findSingle = async (id) => {
  return await Course.findById(id);
};

// Function to delete single course
export const remove = async (id) => {
  return await Course.findByIdAndDelete(id);
};

export const create = async (partialCourse) => {
  return await Course.create(partialCourse);
}