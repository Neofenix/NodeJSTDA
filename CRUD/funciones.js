const fs = require ('fs')
listaEstudiantes = [];

crear = (estudiante) => {
	listar();
     let est = {
	     nombre: estudiante.nombre,
		 matematicas: estudiante.matematicas,
		 ingles: estudiante.ingles,
		 programacion: estudiante.programacion
	};
	let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
	if(!duplicado){
	listaEstudiantes.push(est);
	console.log(listaEstudiantes);
	guardar();
	}
	else{
		console.log('Ya existe otro estudiante con ese nombre ')
	}
}

const listar = () => {
	try{
	listaEstudiantes = require('./listado.json');
	//listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
	}
	catch(error){
		listaEstudiantes = []
	}
}

const promedioEstudiante = (nom) =>{
	listar()
	let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
	if(!est){
	console.log('No existe el estudiante');
	}
	else{
		console.log('promedio del estudiante: ')
		console.log(promedio(est));
	}
} 

const estudiantesAprobaron = () =>{
	listar()
	console.log('nombre de los estudiantes que han ganado: ')
	listaEstudiantes.forEach(estudiante => {
		let promedioestudiante = promedio(estudiante)
		if(promedioestudiante > 3){
			console.log('nombre ' + estudiante.nombre)
		}
});
}

const promedio = (est) =>{
	let promedio =  (est.matematicas + est.ingles + est.programacion)/3;
	return promedio
}

const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listado.json', datos, (err) => {
		if (err) throw (err);
		console.log('Archivo creado con éxito');
	})
}

const mostrar = () => {
	listar()
    console.log('notas de los estudiantes')
	listaEstudiantes.forEach(estudiante => {
		console.log(estudiante.nombre);
		console.log('notas')
		console.log('matematicas' + estudiante.matematicas)
		console.log('ingles ' + estudiante.ingles)
		console.log('programacion '+ estudiante.programacion + '\n')
	});
}

const mostrarest = (nom) => {
	listar()
	let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
	if(!est){
	console.log('No existe el estudiante');
	}
	else{
		console.log(est);
		console.log('notas')
		console.log('matematicas' + est.matematicas)
		console.log('ingles ' + est.ingles)
		console.log('programacion '+ est.programacion + '\n')
	}
}

const mostrarmat = () =>{
	listar()
	let ganan = listaEstudiantes.filter(mat => mat.matematicas >=3)
	if (ganan.length == 0){
		console.log('ningun estudiante va ganando')
	}
	else{
		ganan.forEach(estudiante => {
			console.log(estudiante.nombre);
			console.log('notas')
			console.log('matematicas ' + estudiante.matematicas)
		});
	}
} 

const actualizar = (nom, asignatura, calificacion) =>{
	listar()
	let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nom)
	if(!encontrado){
       console.log('Estudiante no existe')
	}
	else{
		encontrado[asignatura] = calificacion;
		guardar()
	}
}

const eliminar = (nom) => {
	listar()
	let nuevo = listaEstudiantes.filter(mat => mat.nombre != nom)
	if (nuevo.length == listaEstudiantes.length){
		console.log('ningun estudiante tiene el nombre indicado')
	}
	else{
		 listaEstudiantes = nuevo
		 guardar()
	}
	
}

module.exports = {
	crear,
	mostrar,
	mostrarest,
	mostrarmat,
	promedioEstudiante,
	estudiantesAprobaron,
	actualizar,
	eliminar
}