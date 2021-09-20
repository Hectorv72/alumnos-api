const { model, Schema } = require('mongoose');

const AlumnoSchema = new Schema({

    perfil: {
        type: String,
        default: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
    },

    nombres: {
        type: String,
        required: true
    },

    apellidos:{
        type: String,
        required: true
    },

    fecha_nacimiento:{
        type: Date,
        required: true
    },

    familia:{
        type: Array,
        default: [
            { nombre:'', apellido:'', parentesco:'' }
        ]
    },

    amigos:{
        type: Array,
        default: []
    },

    nacionalidad:{
        type: Object,
        required: true,
        default: { pais:'', provincia:'', localidad:'' }
    },

    deportes:{
        type: Array,
        default: []
    },

    conocimientos:{
        type: Array,
        default: []
    },

    aficiones:{
        type: Array,
        default:[]
    },

    habilidades:{
        type: Array,
        default: []
    },

    informacion_academica:[
        {
            titulo: String,
            fecha_ingreso: Number,
            fecha_finalizacion: Number,
            institucion: String
        }
    ],

    experiencia_laboral:[
        {
            trabajo: String,
            cargo: String,
            fecha_ingreso: Number,
            fecha_finalizacion: Number,
        }
    ],

    redes_sociales:[
        {
            redsocial: String,
            link: String
        }
    ],

    link_github:{
        type: String,
        default: ''
    },

    telefono:{
        type: Number,
    }

});


module.exports = model('Alumno', AlumnoSchema);