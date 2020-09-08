//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Get bootcamps' });
};

//@desc
//@route Get /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Get bootcamp by ID' });
};

//@desc Create new bootcamp
//@route POST /api/v1/bootcamps
//access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create bootcamp' });
};

//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Update bootcamp' });
};

//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Delete bootcamp' });
};
