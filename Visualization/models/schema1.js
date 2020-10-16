const mongoose =  require('mongoose');
const { Collection } =  require('mongoose');

const Schema = mongoose.Schema;

exports.UserSchema = new Schema({

    year: {
        type: Number
    },
    month: {
        type: Number
    },
    day: {
        type: Number
    },
    date: {
        type: Date
    },
    count: {
        type: Number
    }
});

exports.UserSchemaHour = new Schema({

    year: {
        type: Number
    },
    month: {
        type: Number
    },
    day: {
        type: Number
    },
    hour: {
        type: Number
    },
    date: {
        type: Date
    },
    count: {
        type: Number
    }
});
