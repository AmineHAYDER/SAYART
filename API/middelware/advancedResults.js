const advancedResults = (model, populate) => async (req, res, next) =>{
    let query;
    let fields;
    let sortBy;
    const reqQuery = { ...req.query};

    // gt|gte|lt|lte|in query

    const removeFields = ['select','sort','page','limit'];
    removeFields.forEach(param => delete reqQuery[param]);
    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match =>`$${match}`)

    query = model.find(JSON.parse(queryStr))
    //select fields
    if (req.query.select){
        fields = req.query.select.split(',').join(' ')
    }
    //sort

    if (req.query.sort){
        sortBy = req.query.sort.split(',').join(' ')
    }else {

    }
    //Pagination

    const page = parseInt(req.query.page,10)||1
    const limit = parseInt(req.query.limit,10)||1
    const startIndex = ( page - 1 ) * limit
    const endIndex =  page * limit
    const total = await model.countDocuments()


    //Pagination results

    const pagination = {}

    if (endIndex < total){
        pagination.next = {

            page : page +1 ,
            limit
        } }
    if (startIndex > 0) {
        pagination.prev = {

            page: page - 1,
            limit
        }
    }
    const results = await query.select(fields)
                                .sort(sortBy)
                                .skip(startIndex)
                                .limit(limit)
                                .populate(populate)
  res.advancedResults = {

        success: "True",
        count: results.length,
        pagination :pagination,
        data: results
  }
    next ()
}
module.exports = advancedResults;