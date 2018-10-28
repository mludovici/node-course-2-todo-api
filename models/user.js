var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }
})

/*
var user = new User({
    email:'Test'
});

user.save().then((doc) => {
    console.log('Saved todo',doc);
}, (e) => {
    console.log('unable to save todo');
});
*/
module.exports= {User}