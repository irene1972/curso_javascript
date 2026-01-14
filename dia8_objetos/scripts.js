(()=>{
    document.addEventListener('DOMContentLoaded',iniciarPrograma);

    let arrayEmpleados=[];

    function iniciarPrograma(){
        
        const botonCargar=document.querySelector('#cargar');
        const botonListar=document.querySelector('#listar');

        botonCargar.addEventListener('click',cargar);
        botonListar.addEventListener('click',listar);
    }
    function cargar(e){
        e.preventDefault();

        const inputDni=document.querySelector('#dni');
        const inputNombre=document.querySelector('#nombre');
        const inputApellido=document.querySelector('#apellido');
        const inputFecha=document.querySelector('#fecha');
        const inputCargo=document.querySelector('#cargo');
        
        if(inputDni.value && inputNombre.value && inputApellido.value && inputFecha.value && inputCargo.value){
            const empleado=new Empleado(inputDni.value, inputNombre.value, inputApellido.value, inputFecha.value, inputCargo.value);
            arrayEmpleados.push(empleado);

            inputDni.value='';
            inputNombre.value='';
            inputApellido.value='';
            inputFecha.value='';
            inputCargo.value='';

            pintarAviso('Se han guardado los datos correctamente');

        }else{
            alert('Falta algún campo por cumplimentar');
        }
    }
    function pintarAviso(mensaje){
        const formulario=document.querySelector('form');

        const aviso=document.createElement('div');
        aviso.classList.add('exito');
        aviso.textContent=mensaje;

        formulario.appendChild(aviso);

        setTimeout(()=>{
            aviso.remove();
        },3000);

    }
    function listar(e){
        e.preventDefault();
        console.log(arrayEmpleados[0]);
        for(let empleado of arrayEmpleados){
            listarEmpleado(empleado);
        }
        

    }
    function listarEmpleado(empleado){
        const divResul=document.querySelector('.resultado');

        const lista=document.createElement('ul');

        for(let propiedad in empleado){
            const elemLista=document.createElement('li');
            elemLista.textContent=propiedad + ': ' + empleado[propiedad];
            lista.appendChild(elemLista);
        }
        divResul.appendChild(lista);

    }
    function Empleado(dni,nombre,apellido,fecha,cargo){
        this.dni=dni;
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha=fecha;
        this.cargo=cargo;
    }
})()