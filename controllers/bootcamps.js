const Bootcamp = require('../models/Bootcamp');

//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//@desc
//@route Get /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      res.status(404).json({ success: false, message: 'Bootcamp not found' });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//@desc Create new bootcamp
//@route POST /api/v1/bootcamps
//access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, message: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
