const mongoose = require('mongoose');


  function connect  (){
        mongoose.connect('mongodb://localhost:27017/sayart',
            { useNewUrlParser: true,
                    useUnifiedTopology: true })
            .then(() => console.log('Connexion à MongoDB réussie !'))
            .catch(() => console.log('Connexion à MongoDB échouée !'));

}


exports.connect = connect;