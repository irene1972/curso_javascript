(()=>{
    document.addEventListener('DOMContentLoaded',cargarPagina);

    function cargarPagina(){
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db')
        .then(response=>response.json())
        .then(data=>{
            console.log(data.dispositivos);
            const tbody=document.querySelector('#tbody');

            let div;
            for(let dispositivo of data.dispositivos){
                const tr=document.createElement('tr');

                for(let propiedad in dispositivo){
                    const td=document.createElement('td');
                    //console.log(dispositivo[propiedad]);
                    td.textContent=dispositivo[propiedad];
                    tr.appendChild(td);
                }

                const botonDetalles=construirBoton('Detalles');
                botonDetalles.addEventListener('click',()=>{
                    //console.log('irene',dispositivo);
                    verDetalles(dispositivo);
                });
                tr.appendChild(botonDetalles);

                const botonEliminar=construirBoton('Eliminar');
                //botonEliminar.addEventListener('click',eliminar);
                tr.appendChild(botonEliminar);

                const botonModificar=construirBoton('Modificar');
                //botonModificar.addEventListener('click',modificar);
                tr.appendChild(botonModificar);

                tbody.appendChild(tr);

            }
            
        })
        .catch(error=>console.log(error));
    }
    function construirBoton(texto){
        const tdBoton=document.createElement('td');
        const boton=document.createElement('button');
        boton.textContent=texto;
        tdBoton.appendChild(boton);
        return tdBoton;
        
    }
    function verDetalles(dispositivo){
        //console.log('ver detalles',dispositivo);
        const divResul=document.querySelector('.resul');

        for(let propiedad in dispositivo){
            const parrafo=document.createElement('p');
            parrafo.textContent=dispositivo[propiedad];
            divResul.appendChild(parrafo);
        }

        const botonEliminar=document.createElement('button');
        botonEliminar.textContent='Eliminar';
        botonEliminar.addEventListener('click',()=>{
            eliminar(dispositivo.id);
        });
        divResul.appendChild(botonEliminar);
        divResul.appendChild(document.createElement('br'));

        const nombreInput=document.createElement('input');
        nombreInput.placeholder='Introduzca el nuevo nombre'

        const modeloInput=document.createElement('input');
        modeloInput.placeholder='Introduzca el nuevo modelo'

        divResul.appendChild(nombreInput);
        divResul.appendChild(modeloInput);

        const botonActualizar=document.createElement('button');
        botonActualizar.textContent='Actualizar';
        botonActualizar.addEventListener('click',()=>{
            const nombre=nombreInput.value;
            const modelo=modeloInput.value;
            modificar(dispositivo.id,nombre,modelo);
        });
        divResul.appendChild(botonActualizar);
        

        
    }
    function eliminar(id){
        //console.log('eliminar',id);
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/'+id,{
            method:'DELETE'
        })
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
            })
            .catch(error=>console.log(error));
    }
    function modificar(id,nombre,modelo){
        //console.log('modificar',id,nombre,modelo);
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/'+id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                marca:nombre,
                modelo:modelo
            })
        })
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
            })
            .catch(error=>console.log(error));
    }
})()