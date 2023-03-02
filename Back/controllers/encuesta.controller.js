const ctrl = {};
const encuestamodel = require("../model/encuestamodel");


ctrl.obtenerData = async(req, res)=>{
    const data = await encuestamodel.find();

    res.json(data);
}

ctrl.enviarEncuesta = async (req, res)=>{
    const {pregunta1, pregunta2, pregunta3, pregunta4, pregunta5} = req.body;


    const nuevaRes = new encuestamodel({
        pregunta1, pregunta2, pregunta3, pregunta4, pregunta5
    });

    await nuevaRes.save();

    res.json({
        res: 'Guardado'
    })
}

module.exports = ctrl