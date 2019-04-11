// Selectores de elementos

// console.log(document);
// Selectores elemntos individuales

// selecciona por id
let elem = document.getElementById('my-form');
// console.log(elem);

// selecciona usando selectores de css 
elem = document.querySelector('.container');
// console.log(elem);

// Selectores de multiples elementos
let elems = document.querySelectorAll('.items');
// console.log(elems);

elems = document.getElementsByTagName('li');
// console.log(elems);

elems = document.getElementsByClassName('items');
// console.log(elems);

// MANIPULACION DEL DOM
const ul = document.querySelector('.items');
// console.log(ul);
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hola';
ul.children[1].textContent = 'good bye';
ul.children[2].innerHTML = '<h2> hello again</h2>';

const boton = document.querySelector('.btn');
// boton.style.background = 'red';

//Eventos

boton.addEventListener('click', (evento) => {
    evento.preventDefault();
    console.log(evento.target.className);

    // evento.target.ClassList.add('blue');


    document.getElementById('my-form').
    style.background = '#ccc';

    ul.lastElementChild.innerHTML = '<h2> Changed</h2>';
});
