const { connect } = require("mongoose");

const connectDB = async () =>{

    try {
        connect('mongodb+srv://drevensantiago:PoEPWXcY0NFJUyB7@cluster0.hef4gjm.mongodb.net/test')
        console.log('BD connected');

    } catch (err) {
        console.log(`Error al conectar la BD: ${err}`);
    }
}

module.exports = connectDB;