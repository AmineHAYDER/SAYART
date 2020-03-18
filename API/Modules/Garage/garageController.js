const Garage = require('./garageModel')

// @desc get all garages
// @route get /garages
// @access signed in
exports.getGarages = async (req, res, next) => {

    try {
        const g = await Garage.find();
        res.status(200).json({ success: true, data: g });
    } catch{
        res.status(400).json({ success: false, data: null });
    }

};


// @desc create new bootcamp
// @route post /garages
// @access signed in
exports.createGarage = async (req, res, next) => {
    const g = await Garage.create(req.body);
    res.status(201).json({
        success: true, data: g
    })
};


// @desc update
// @route put /garages
// @access signed in
exports.updateGarage = async (req, res, next) => {

    const g = await Garage.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if (!g) {
        return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, msg: `update garage ${req.params.id}` });
};


exports.getGarage = async (req, res, next) => {
    try {
        const g = await Garage.findById(req.params.id)

        if (!g) {
            return res.status(400).json({ success: false, data: null });
        }

        res.status(200).json({ success: true, data: g });
    } catch (err) {
        res.status(400).json({ success: false, data: null });
    }
};

// @desc create new bootcamp
// @route put /garages
// @access signed in
exports.deleteGarage = async (req, res, next) => {
    try {
        const g = await Garage.findByIdAndDelete(req.params.id, req.body);

        if (!g) {
            return res.status(400).json({ success: false, data: null });
        }

    } catch (err) {
        res.status(400).json({ success: false, data: null });
    }
};





