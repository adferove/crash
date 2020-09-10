const express = require('express');
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootCamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootCamp)
  .delete(deleteBootcamp);

module.exports = router;
