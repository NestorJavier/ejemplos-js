


const suma = function suma(num1, num2 = 1)
{
    console.log(`La suma es ${num1 +num2}`);
}
// 
suma(30);

suma(30, 30);

// funciones flecha
const resta = (num1, num2 = 1) => {

    console.log(`La suma es ${num1 - num2}`);
}

resta(10,3);

const resta2 = (num1, num2 = 1) => {

    return num1 - num2;
}
console.log(resta2(12,4));

const resta3 = (num1, num2 = 1) =>  num1 - num2;

console.log(resta3(17,67));

const arreglo = [2,4,5,3,7,3,7,10];
arreglo.forEach(function(num){
    suma()
});

//Arreglos de objetos
const tareas = [
    {
        id: 1,
        texto: 'Scar la basura',
        estaTerminada: true
    },
    {
        id: 2,
        texto: 'Limpiar',
        estaTerminada: true
    },
    {
        id: 3,
        texto: 'Ir por garrafon',
        estaTerminada: true
    },
    {
        id: 4,
        texto: 'Sacar la basura',
        estaTerminada: true
    }
]

tareas.forEach(function(tarea){
    console.log(tarea.texto);
});

tareas.forEach((tarea) => console.log(tarea.texto));

tareas.map((tarea) => tarea.texto) 

const cuadrados = arreglo.map((num) => num*num);

console.log(cuadrados);

//filter

const tareasTerminadas = tareas.filter((tarea) => tarea.estaTerminado == true);
console.log(tareasTerminadas);


// Objetos prototipo

//Los objetos prototipo se pueden crear por medio de un 
// constructor de funcion

function Persona(nombre, apellido, fechaNac)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = new Date(fechaNac);

    this.anioNacimiento = function() {
        return this.fechaNac.getFullYear();
    }
}


//Instanciar prototipo

const personal = new Persona('Juan','Mendez','4-3-1997');
console.log(typeof personal);
console.log(personal);

const arregloPersonas = [];
arregloPersonas.push(personal);
arregloPersonas.push(new Persona('Mary','Lopez','3-6-1990'));
console.log(arregloPersonas);


arregloPersonas.filter((persona) => 
                    persona.anioNacimiento() >= 1980 && 
                    persona.anioNacimiento() <= 1996);