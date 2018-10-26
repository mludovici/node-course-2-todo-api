const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();

//console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db= client.db('TodoApp')

    db.collection('Todos').insertOne({
        text:'Something to do',
        conpleted:false
    }, (err,result) => {
        if (err) {
            return console.log('Unable to insert todo');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    
    db.collection('Users').insertMany([{
        name: 'Marc',
        age: 32,
        location: 'Philadelphia'        
    }, {
        name: 'Andrew',
        age: 22,
        location: 'Hell'
    }], (err,result) => {
        if (err) {
            return console.log('Unable to insert todo');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    client.close();
});