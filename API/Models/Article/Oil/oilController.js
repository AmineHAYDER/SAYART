const oilModel = require('./oilModel');


class oilController {


    async all ( req , res , next ) {

        res.status(200)
            .json(res.advancedResults)
    }


    async store ( req , res ,next) {
        let success = []
            const filter = [
                {
                    "name": "Huile moteur BOLK",
                    "reference": "BOL-D031015",
                    "capacity":"5" ,
                    "price":"52.5",
                    "viscosity":"10W40",
                    "norms": ["API SL/CF", "ACEA A3/B4", "ACEA A3/B3", "MB 229.1 / MB 229.3", "VW 500.00 / VW 501.01 VW 502.00 / VW 505.00", "PSA B71 2294 / PSA B71 2295", "RN 0700"],
                    "type": "Semi-synthétique",
                    "manufacture": "BOLK"
                },{
                    "name": "Huile moteur QUARTZ 9000 ENERGY",
                    "reference": "TOT009",
                    "capacity":"5" ,
                    "price":"25.6",
                    "viscosity":"5W40",
                    "norms": ["MB 229.5", "ACEA A3/B4", "MB 229.3", "VW 505.00", "VW 502.00", "API SN/CF "],
                    "type": "synthétique",
                    "manufacture": "TOTAL"

                },{
                    "name": "Huile moteur QUARTZ INEO ECS 5W30 C2",
                    "reference": "TOT006",
                    "capacity":"5" ,
                    "price":"110.5",
                    "viscosity":"5W30",
                    "norms": ["ACEA C2"],
                    "type": "synthétique",
                    "manufacture": "TOTAL"

                },{
                    "name": "Huile moteur BOLK 5W40",
                    "reference": "BOL-D031016",
                    "capacity":"5" ,
                    "price":"120.5",
                    "viscosity":"5W40",
                    "norms": ["ACEA C2"],
                    "type": "synthétique",
                    "manufacture": "BOLK"

                },{
                    "name": "Huile moteur QUARTZ 7000 ENERGY",
                    "reference": "TOT011",
                    "capacity":"5" ,
                    "price":"86",
                    "viscosity":"10W40",
                    "norms": ["ACEA C2"],
                    "type": "synthétique",
                    "manufacture": "TOTAL"

                },{
                    "name": "Huile moteur CASTROL EDGE TITANIUM LL",
                    "reference": "15669D",
                    "capacity":"5" ,
                    "price":"75",
                    "viscosity":"5W30 LL",
                    "norms": ["ACEA C2"],
                    "type": "synthétique",
                    "manufacture": "CASTROL"

                },{
                    "name": "Huile moteur BOLK",
                    "reference": "BOL-D091016",
                    "capacity":"5" ,
                    "price":"109",
                    "viscosity":"5W30 LL",
                    "norms": ["ACEA C2"],
                    "type": "synthétique",
                    "manufacture": "TOTAL"

                }]
       await filter.map(filter =>   oilModel.create(filter).then(deg => success.push("success")) )

             await   res.status(201)
                    .json({
                        success: "True",
                        data: success,
                    })

    }

    put ( req , res ,next ) {

        oilModel.findByIdAndUpdate(req.params.id, req.body , {
            new : true ,
            runValidators: true
        })
            .then((updatedservice) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedservice,
                    })
            }).catch( (err) => {
            next(err)
        })
    }
    delete ( req, res , next ) {
        oilModel.findByIdAndDelete(req.params.id)
            .then((updatedservice) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedservice,
                    })
            }).catch( (err) => {
            next(err)
        })
    }


}
module.exports = new oilController();