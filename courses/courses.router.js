/* 
 * This file is the Router of the webservice. I use Express Router function
 * and depending on the verb and what you put in the URI the router will
 * perform different operations
 * 
 */

import express from 'express';
import {
  findAll,
  findSingle,
  remove,
  create
} from './courses.service.js';

export const coursesRouter = express.Router();

// Get all courses
coursesRouter.get('/', async (_req, res) => {
  try {
    const courses = await findAll();
    res.send(courses);
  } catch (error) {
    res.status(500).send({
      message: 'Sever error'
    });
  }
});

// Get single course
coursesRouter.get('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;

    const course = await findSingle(id);

    // If there is a course on the given ID it will show the course
    if (!course) {
      // If there is nothing on the id send back 404
      res.status(404).send({
        message: 'Course not found.'
      });
    }

    res.send(course);
  } catch (error) {
    res.status(500).send({
      message: 'Sever error'
    });
  }
});

// Delete single course
coursesRouter.delete('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;

    await remove(id);

    res.status(204).end();
  } catch (error) {
    res.status(500).send({
      message: 'Sever error'
    });
  }
});

// Create a course
coursesRouter.post('/', async (req, res) => {
  try {
    const {
      code,
      name,
      semester
    } = req.body;

    await create({
      code,
      name,
      semester
    });

    res.status(200).send({
      message: 'Successfully created'
    });
  } catch (error) {
    res.status(500).send({
      message: `Sever error ${error}`
    });
  }
});