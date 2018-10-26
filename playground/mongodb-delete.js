const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();

//console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db= client.db('TodoApp');
               
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result,err)=> {
    //     console.log(result);
    //     //console.log(err);
    // });

    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    })

    //client.close();
});