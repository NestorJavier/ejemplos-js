//alert('Hola mundo!');
console.log('Hola Mundo!');
console.error('Hola error!');
console.warn('Hola warning!');

//Variables
//var, let, const

/*if (true) {
    var edad = 20; //Se debería usar let
}
edad++;

console.log(edad);

////////////////////
var nombre = 'Raul';
nombre = 'Pedro';
console.log(nombre);*/

const altura = 1.5; //Se debe inicializar
console.log(altura);

//Tipos de Datos
//String, Number, Boolean, null, undefined

const name = 'John' //String
const age = 30; //Number
const rating = 4.5; //Number
const isCool = true; //Boolean
const x = null; //null //Object
const y = undefined; //undefined;

//Para saber el tipo de dato
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

console.log('My name is name and I am age');
console.log('My name is' + name + ' and I am ' + age);
//Template String encerrado entre ` y ` (backticks)
//Interpolación evalúa una expresión dentro del template en ${ }
console.log(`My name is ${name} and I am ${age} days old`);

//Métodos de cadenas
const s = "Hola mundo"
console.log(s.length); //Propiedad
console.log(s.toUpperCase()); //Método
console.log(s.substring(0,6));
console.log(s.split(''));

//Arreglos

const numeros = new Array(3, 12, 34, 25, 31);
numeros.push('cadena');
//push agrega un elemento al final del arreglo 
numeros.push(3 > 5);
//unshift agrega un elemento al inicio del arreglo
numeros.unshift(0);
numeros.unshift('Hola');
numeros.pop(); //Elimina del final
numeros.shift(); //Elimina del inicio
console.log(numeros);

const frutas = ['pera', 'manzana', 'mango'];
console.log(frutas.indexOf('naranja')); //clg+tab

//Objetos Literales
//usa llaves {}
const persona = {
    nombre: 'Karina',
    edad: 17,
    pasatiempos: ['Leer', 'Dormir', 'Comer', 'Amar al Lencho'],

    direccion:{
        calle: 'Manuel J. Othon',
        numero: 380,
        ciudad: 'SLP'
    },
};

persona.correo = 'karinitabebe@gmail.com';

const{nombre, edad, direccion: {ciudad}} = persona;
//Imprime toda la información de persona
console.log(persona);
//Imprime información específica de un campo de persona
//console.log(persona.nombre);


//Arreglos de Objetos
const tareas = [
    {
        id: 1,
        texto: 'Sacar la basura',
        estaTerminada: true
    },

    {
        id: 2,
        texto: 'Ir a la tienda',
        estaTerminada: false
    },

    {
        id: 3,
        texto: 'Comprar mandado',
        estaTerminada: false
    },

    {
        id: 4,
        texto: 'Ir a la escuela',
        estaTerminada: true
    },
];

console.log(tareas);

//JSON = JavaScript Object Notation
//Es una notacion estándar muy popular para transferir información
//entre un cliente y un servidor web

const cadenaJSON = JSON.stringify(tareas);
console.log(cadenaJSON);

//Ciclos
//for tradicional
for(let i = 0; i<tareas.length; i++)
{
    console.log(`Tarea ${i+1}: ${tareas[i].texto}`);
}

//ciclo while
let i = 0;
while(i <tareas.length)
{
    console.log(`Tarea ${i+1}: ${tareas[i].texto}`);
    i++;
}

//for-of (for each)
for(tarea of tareas)
{
    console.log(tarea.texto);
}

