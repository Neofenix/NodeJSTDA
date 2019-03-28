/* var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000) */


const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
require('./helpers');
 
const directoriopublico = path.join(__dirname,'../public')
const directoriopartials = path.join(__dirname,'../partials')
app.use(express.static(directoriopublico));
app.use(bodyParser.urlencoded({extended:false}))
hbs.registerPartials(directoriopartials);

app.set('view engine', 'hbs');

app.get('/',(req, res) =>{
  res.render('index',{
    estudiante: 'Sebastian'
  });
});

app.post('/calculos',(req,res) => {
  console.log(req.query);
   res.render('calculos',{
    //  estudiante: req.query.nombre,
    //  nota1: parseInt(req.query.nota1),
    //  nota2: parseInt(req.query.nota2),
    //  nota3: parseInt(req.query.nota3)
     estudiante: req.query.nombre,
     nota1: parseInt(req.body.nota1),
     nota2: parseInt(req.body.nota2),
     nota3: parseInt(req.body.nota3)
   })
})

console.log(__dirname)
 
app.listen(3000, () =>{
	console.log('Escuchando en el puerto 3000')
});

app.get('*',(req,res) =>{
  res.render('error', {
  estudiante: 'error'
  })
})
