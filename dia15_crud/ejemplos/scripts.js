//https://jsonplaceholder.typicode.com/posts
(()=>{
    document.addEventListener('DOMContentLoaded',cargarDatos);

    function cargarDatos(){
        const botonPost=document.querySelector('#post');
        const botonPut=document.querySelector('#put');
        const botonDelete=document.querySelector('#delete');
        const botonPatch=document.querySelector('#patch');
        const botonCredenciales=document.querySelector('#credenciales');
        const botonCache=document.querySelector('#cache');
        const botonRedirecciones=document.querySelector('#redirecciones');
        
        botonPost.addEventListener('click',()=>{solicitudPost('Mi post','Mi contenido')});
        botonPut.addEventListener('click',solicitudPut);
        botonDelete.addEventListener('click',solicitudDelete);
        botonPatch.addEventListener('click',solicitudPatch);
        botonCredenciales.addEventListener('click',solicitudCredenciales);
        botonCache.addEventListener('click',solicitudCache);
        botonRedirecciones.addEventListener('click',solicitudRedirecciones);
    }

    function solicitudPost(titulo,contenido){
        
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId:1,
                title:titulo,
                body:contenido
            })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Registro creado: ',data);
        })
        .catch(error=>console.log(error)); 
    }
    function solicitudPut(){
        fetch('https://jsonplaceholder.typicode.com/posts/5',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:'Nuevo titulo',
                body:'Nueva descripcion'
            })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Registro modificado: ',data);
        })
        .catch(error=>console.log(error)); 
    }
    function solicitudDelete(){
        fetch('https://jsonplaceholder.typicode.com/posts/5',{
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Registro eliminado: ',data);
        })
        .catch(error=>console.log(error)); 
    }
    function solicitudPatch(){
        fetch('https://jsonplaceholder.typicode.com/posts/5',{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:'Nuevo titulo'
            })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Registro modificado: ',data);
        })
        .catch(error=>console.log(error)); 
    }
    function solicitudCredenciales(){

        let usuario='Irene';
        let password='12345';
        let token='miToken';

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET',
            credentials:'include',
            headers:{
                //'Authorization': 'Basic'+btoa(usuario+':'+password),
                'Authorization': 'Bearer '+token,
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        })
        .catch(error=>console.log(error)); 
    }
    function solicitudCache(){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET',
            //cache:'default',
            //cache:'no-cache',
            //cache:'no-store',
            //cache:'reload',
            //cache:'force-cache',
            cache:'only-if-cached'
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        })
        .catch(error=>console.log(error)); 
    }
    function solicitudRedirecciones(){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET',
            //redirect:'follow',
            redirect:'error'
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        })
        .catch(error=>console.log(error)); 

        //********************************************************** */
        //otro tipo de redirect es manual
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET',
            redirect:'manual'
        })
        .then(response=>{
            if(response.type==='opaqueredirect'){
                let nuevaUbicacion=response.headers.get('Location');
                console.log('Redirigir a: ',nuevaUbicacion);
            }else{
                return response.json();
            }
            
        })
        .then(data=>{
            console.log(data);
        })
        .catch(error=>console.log(error)); 
    }
})()