const {Schema, model} = require('mongoose');

const encuestaSchema = new Schema({
    pregunta1:{
        type: String,
        require: true
    },
    pregunta2:{
        type: String,
        require: true
    },
    pregunta3:{
        type: String,
        require: true
    },
    pregunta4:{
        type: String,
        require: true
    },
    pregunta5:{
        type: String,
        require: true
    },
}, {timestamps: true, versionKey: false});

module.exports = model('respuestas', encuestaSchema);