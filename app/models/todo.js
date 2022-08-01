var mongoose = require('mongoose');

module.exports = mongoose.model('TO-DO', {
    text: {
        type: String,
        default: ''
    }
});