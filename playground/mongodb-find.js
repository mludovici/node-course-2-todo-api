// const {MongoClient, ObjectID} = require('mongodb');

// //var obj = new ObjectID();

// //console.log(obj.getTimestamp());

// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB Server');
//     }
//     console.log('Connected to MongoDB server');

//     const db= client.db('TodoApp');

//     db.collection('Users').find({
//         _id: new ObjectID('5bd33fd1bf06051af060092e')
//     }).toArray().then((docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('unable to fetch todos', err);
//     }) //returns cursor (pointer to documents), toArray() returns a Promise and 
//                                             //returns an array of the documents

//     db.collection('Todos').find({}).count().then((count) => {
//         console.log(`Todos count: ${count}`);
//     }, (err) => {
//         console.log('unable to count todos', err);
//     })                                    

//     //client.close();
// });