const router = require('express').Router();

const { getAlumnos, addAlumno } = require('../controllers/alumno.controllers');


router.get('/', getAlumnos);

router.post('/', addAlumno);

module.exports = router;
