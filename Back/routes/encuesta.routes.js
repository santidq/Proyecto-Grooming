const { enviarEncuesta, obtenerData } = require('../controllers/encuesta.controller');

const router = require('express').Router();

router.get('/obtenerdata', obtenerData);

router.post('/enviarencuesta', enviarEncuesta);

module.exports = router;