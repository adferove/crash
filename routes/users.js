const express = require('express');

const {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const User = require('../models/User');

const advancedResults = require('../middleware/advancedResults');
const { authorize, protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

//Protect and authorize all routes
router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(addUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
