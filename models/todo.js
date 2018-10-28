var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    createdAt: {
        type: Date,
        default: new Date
    }
})
/*
var newTodo = new Todo({
    text: '              ',
    completed: true,
    completedAt: 33
});

newTodo.save().then((doc) => {
    console.log('Saved todo',doc);
}, (e) => {
    console.log('unable to save todo');
});
*/

module.exports = {Todo};