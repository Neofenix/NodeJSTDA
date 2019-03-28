const {argv} = require('./crear');
/* const {crear} = require('./funciones'); */
const funciones = require('./funciones');

/* console.log(argv)
console.log(' posicion 0 ' + argv._[0]) */

let comando = argv._[0]
switch (comando){
	case 'crear':
	funciones.crear(argv);
	break

	case 'mostrar':
	funciones.mostrar();
	break

	case 'mostrarest':
	funciones.mostrarest(argv.nombre)
	break

	case 'mostrarmat':
	funciones.mostrarmat();
	break

	case 'mostrarpromedio':
	funciones.promedioEstudiante(argv.nombre)
	break

	case 'estudiantesAprobaron':
	funciones.estudiantesAprobaron()
	break

	case 'actualizar':
	funciones.actualizar(argv.nombre, argv.asignatura, argv.calificacion)
	break

	case 'eliminar':
	funciones.eliminar(argv.nombre)
	break

	default:
	console.log('No ingresó una funcion existente')

}
/*if(argv._[0] == 'crear'){
	funciones.crear(argv);
}*/