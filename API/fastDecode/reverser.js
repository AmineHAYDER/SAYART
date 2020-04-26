const geocoder = require('../utils/geocoder');



const reverse = async ( req , res )=> {
    const results = await geocoder.reverse({lat: req.body.lat, lon: req.body.lng});
    console.log(results)
    await res
        .json({
            success: true,
            results

        });
}

module.exports = reverse  ;