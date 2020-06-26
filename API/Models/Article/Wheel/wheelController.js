const WheelModel = require('./wheelModel');


class wheelController {


    async all(req, res, next) {

        res.status(200)
            .json(res.advancedResults)
    }


    async store(req, res, next) {

        let success = []
        const filter = [
            {
                "name": "ContiWinterContact TS 830P",
                "reference": "CON-530",
                "width": "225",
                "height": "60",
                "diameter": "16",
                "load": "98",
                "speed": "h",
                "manufacture": "CONTINENTAL",
                "price": "110.90"
            }, {
                "name": "SP Winter Sport 5 XL",
                "reference": "DU-290705",
                "width": "215",
                "height": "55",
                "diameter": "16",
                "load": "97",
                "speed": "h",
                "manufacture": "DUNLOP"
            }, {
                "name": "Turanza T005",
                "reference": "BRI-4771691",
                "width": "215",
                "height": "55",
                "diameter": "16",
                "load": "93",
                "speed": "V",
                "manufacture": "BRIDGESTONE",
                "price": "97.90"
            }, {
                "name": "EfficientGrip Cargo XL",
                "reference": "GOO-4521939",
                "width": "185",
                "height": "75",
                "diameter": "16",
                "load": "104",
                "speed": "R",
                "manufacture": "GOODYEAR",
                "price": "86.90"
            }, {
                "name": "Cinturato P1 Verde XL",
                "reference": "PIR-745",
                "width": "185",
                "height": "75",
                "diameter": "16",
                "load": "87",
                "speed": "h",
                "manufacture": "PIRELLI",
                "price": "82.90"
            }, {
                "name": "Vancontact",
                "reference": "CON-17544",
                "width": "175",
                "height": "75",
                "diameter": "16",
                "load": "101",
                "speed": "R",
                "manufacture": "CONTINENTAL",
                "price": "93.90"
            }
        ]
        await filter.map(filter => WheelModel.create(filter).then(deg => {
            success.push("success")
            console.log(deg)
        }))

        await res.status(201)
            .json({
                success: "True",
                data: success,
            })
    }

    put(req, res, next) {

        WheelModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
            .then((updatedservice) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedservice,
                    })
            }).catch((err) => {
            next(err)
        })
    }

    delete(req, res, next) {
        WheelModel.findByIdAndDelete(req.params.id)
            .then((updatedservice) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedservice,
                    })
            }).catch((err) => {
            next(err)
        })
    }


}

module.exports = new wheelController();