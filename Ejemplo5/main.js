const formulario = document.querySelector('#my-form');
const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const mensaje = document.querySelector('.msg');
const ususarios = document.querySelector('#users');
formulario.addEventListener('submit',(evento)=> {
    evento.preventDefault();
    console.log(evento);

    if(nombre.value === '' || email.value === '')
    {
        // alert('Tienes que escribir el nombre o correo');
        mensaje.classList.add('error');
        mensaje.innerHTML = 'Llena todos los campos';
        setTimeout(() => {
            mensaje.innerHTML = '';
            mensaje.classList.remove('error');
            // mensaje.remove()
        }, 3000);
    }
    else
    {
        // crear un elemento de la lista 
        const elemento = document.createElement('li');
        const texto =  document.createTextNode(`Ususario: ${nombre.value}, 
        correo: ${email.value}`);
        elemento.appendChild(texto);
        ususarios.appendChild(elemento);
        nombre.value = '';
        email.value = '';
    }

    // console.log(evento);

});