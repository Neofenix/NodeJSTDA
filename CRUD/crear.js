const nombre = {
	demand: true,
	alias: 'n'
}

const matematicas = {
	default: 0,
	demand: true,
	alias: 'm'
}

const ingles = {
	default: 0,
	demand: true,
	alias: 'i'
}

const programacion = {
	demand: true,
	alias: 'p'
}

const creacion = {
	nombre,
	matematicas,
	ingles,
	programacion
}

const muestraest ={
	nombre
}

const actualiza ={
	nombre,
	asignatura : {
		demand:true,
		alias: 'a'
	},
	calificacion : {
		demand: true,
		alias : 'c'
	}
}

const elimina ={
	nombre
}

const argv = require('yargs')
	.command('crear', 'Crear un estudiante', creacion)
	.command('mostrar','Muestra los estudiantes')
	.command('mostrarest','Muestra la informacion del estudiante',muestraest)
	.command('mostrarpromedio','Muestra la informacion del estudiante',muestraest)
	.command('estudiantesAprobaron','Nombre de los estudiantes que han aprobado')
	.command('actualizar', 'Actualizar la informacion del curso',actualiza)
	.command('eliminar', 'Eliminar estudiante',elimina)
	.argv

module.exports = {
	argv
};
