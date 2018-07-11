const mongoose = require('mongoose');

const subiectName = mongoose.Schema({
    name: {type: String, default: ''},
    type: {type: String, default: ''},
    pic: {type: String, default: 'default.png'},
    members: [{
        username: {type: String, default: ''},
        email: {type: String, default: ''}
    }]
});

module.exports = mongoose.model('Subiect', subiectName);