const formulario = document.querySelector('#my-form');
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const tabla = document.querySelector('#tabla');
var bandModifica = false;
const btnUpdate = document.querySelector('#update');
var idrow = '';
formulario.addEventListener('submit',(evento)=> {
    evento.preventDefault();
    

    tabla.innerHTML += `
    <tr id="${correo.value}">
        <td class="nom">${nombre.value}</td>
        <td class="tel">${telefono.value}</td>
        <td class="corr">${correo.value}</td>
        <td>
            <button class="eliminar"> X </button>
            <button class="editar"> E </button>
        </td>
    </tr>
    `;

    nombre.value = '';
    telefono.value = '';
    correo.value = '';
    console.log(tabla);
});

tabla.addEventListener('click',(evento)=> {
    evento.preventDefault();
    // console.log(`Elemento: `, evento.target);
    // console.log(`Padre: `, evento.target.parentNode);
    // console.log(`Abuelo: `, evento.target.parentNode.parentNode);
    if(evento.target.classList.contains('eliminar')) 
    {
        tabla.removeChild(evento.target.parentNode.parentNode);
    }
    if(evento.target.classList.contains('editar')) 
    {
        tr = evento.target.parentNode.parentNode;
        // console.log(tr);
        nombre.value = tr.children[0].textContent;
        telefono.value = tr.children[1].textContent;
        correo.value = tr.children[2].textContent;
        bandModifica = true;
        idrow = tr.id;
        console.log(idrow);
    }
});

// btnUpdate.addEventListener('click',(evento)=> {
//     evento.preventDefault();
//     if(bandModifica) 
//     {
//         console.log(tabla);
//         var row = document.querySelector('#tabla');

//     }
// });
