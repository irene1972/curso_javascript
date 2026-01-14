(()=>{
    document.addEventListener('DOMContentLoaded',inicioPrograma);

    let datos;

    function inicioPrograma(){
        const select=document.querySelector('#select');
        const boton=document.querySelector('#boton');
        const input=document.querySelector('#campo');
        
        select.addEventListener('change',cargarJson);
        boton.addEventListener('click', buscar);
        input.addEventListener('keydown',function(e){
            //console.log('key down');
            //console.log(e.keyCode);
            if(!((e.keyCode>=65 && e.keyCode<=90) | e.keyCode===32 | e.keyCode===8)){// 
                e.preventDefault();
            }
        });

    }
    function cargarJson(e){
        alert('El archivo de búsqueda ahora es ' + e.target.value);

        fetch(e.target.value + '.json')
            .then(response=>response.json())
            .then(data=>{
                //console.log(data);
                datos=data;
            })
            .catch(error=>console.log(error));
        
    }
    function buscar(){
        const input=document.querySelector('#campo');

        const resul=document.querySelector('.resul ul');
        resul.innerHTML='';

        if(datos){
            if(input.value.length>2){
                //console.log(datos);
                let hayCoincidencia=false;
                datos.data.forEach(elemento=>{
                    //console.log(elemento.nombre);
                    //console.log(input.value.toUpperCase());
                    if(elemento.nombre.includes(input.value.toUpperCase())){
                        const lista=document.querySelector('.resul ul');
                        const elemLista=document.createElement('li');
                        const parrafo1=document.createElement('p');
                        parrafo1.textContent=elemento.nombre;

                        const parrafo2=document.createElement('p');
                        parrafo2.textContent=elemento.sinopsis;
                        parrafo2.classList.add('oculto');

                        elemLista.appendChild(parrafo1);
                        elemLista.appendChild(parrafo2);

                        lista.appendChild(elemLista);

                        parrafo1.addEventListener('mouseover',function(){
                            parrafo2.classList.remove('oculto');
                        });
                        parrafo1.addEventListener('mouseout',function(){
                            parrafo2.classList.add('oculto');
                        });
                        hayCoincidencia=true;
                    }
                });
            if (hayCoincidencia===false) alert('No hay coincidencias');
            }else{
                alert('Debe introducir al menos 3 carácteres en el buscador');
            }
            
        }else{
            alert('Primero debe seleccionar una opción');
        }

    }
})()