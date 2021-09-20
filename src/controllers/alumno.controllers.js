const ctrlAlumnos = {};
const Alumno = require('../models/alumno.models');


ctrlAlumnos.getAlumnos = async (_req, res) => {
    const alumnos = await Alumno.find();
    
    res.json(alumnos);
}

ctrlAlumnos.addAlumno = async (req, res) => {
    const datos = req.body;
    const alumno = new Alumno(datos);
    await alumno.save();

    res.json({msg: 'Alumno agregado', alumno});
}

module.exports = ctrlAlumnos;