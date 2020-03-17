const mongoose = require('mongoose');


  function connect  (){
        mongoose.connect('mongodb://localhost:27017/sayart',
            { useNewUrlParser: true,
                      useCreateIndex: true,
                      useFindAndModify: false,
                      useUnifiedTopology: true })
            .then(() => console.log('Connexion à MongoDB réussie !'.green))
            .catch(() => console.log('Connexion à MongoDB échouée !'.red));

}


exports.connect = connect;