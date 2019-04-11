const formulario = document.querySelector('#my-form');
const precio = document.querySelector('#precio');
const concepto = document.querySelector('#concepto');
// const tot = document.querySelector('#total');
var total = 0.0;
// const mensaje = document.querySelector('.msg');
const tabla = document.querySelector('#tabla');
formulario.addEventListener('submit',(evento)=> {
    evento.preventDefault();
    // console.log(evento);


        const renglon = document.createElement('tr');
            const celdaConcepto = document.createElement('td');
                const nodetxtConcepto =  document.createTextNode(`${concepto.value}`);
            const celdaPrecio = document.createElement('td');
                const nodetxtPrecio =  document.createTextNode(`$${precio.value}`);
        
        celdaConcepto.appendChild(nodetxtConcepto);
        celdaPrecio.appendChild(nodetxtPrecio);
        renglon.appendChild(celdaConcepto);
        renglon.appendChild(celdaPrecio);

        tabla.appendChild(renglon);
        total += Number.parseFloat(precio.value);
        document.querySelector('#total').innerHTML = total;
        concepto.value = '';
        precio.value = '';




    // }

    // console.log(evento);

});














    // if(concepto.value === '' || precio.value === '')
    // {
    //     // alert('Tienes que escribir el nombre o correo');
    //     mensaje.classList.add('error');
    //     mensaje.innerHTML = 'Llena todos los campos';
    //     setTimeout(() => {
    //         mensaje.innerHTML = '';
    //         mensaje.classList.remove('error');
    //         // mensaje.remove()
    //     }, 3000);
    // }
    // else
    // {