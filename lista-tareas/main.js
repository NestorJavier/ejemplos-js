const formulario = document.querySelector('#my-form');
const nombre = document.querySelector('#name');
const ususarios = document.querySelector('#users');

formulario.addEventListener('submit',(evento)=> {
    evento.preventDefault();
    console.log(evento);

    const elemento = document.createElement('li');
    elemento.className = 'tarea';
    const chkbx = document.createElement('input');
    chkbx.type = 'checkbox';
    const texto =  document.createTextNode(`Pruevas ${nombre.value}`);
    span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    elemento.appendChild(chkbx);
    elemento.appendChild(texto);
    elemento.appendChild(span);
    
    ususarios.appendChild(elemento);
    
    nombre.value = '';
});

formulario.addEventListener('click',(evento)=> {

});

