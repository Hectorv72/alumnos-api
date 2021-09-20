const router = require('express').Router();

const { getAlumnos, addAlumno } = require('../controllers/alumno.controllers');


router.get('/', getAlumnos);

// router.get('/', getAlumnos);

router.post('/', addAlumno);

// router.put('/', updateAlumno);

// router.delete('/', deleteAlumno);

module.exports = router;
