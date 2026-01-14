(()=>{
    document.addEventListener('DOMContentLoaded',iniciarPrograma);

    const arrayNotas=[5,6,1,8,7];
    //const arrayNotas=[5,6,9,8,7];
    const divResultado=document.querySelector('.resultado');
    const botonListar=document.querySelector('.listar'); //for of
    const botonMedia=document.querySelector('.media');  //for
    const botonMaximo=document.querySelector('.maximo');    //while
    const botonSuspenso=document.querySelector('.suspenso');    //do while

    function iniciarPrograma(){
        botonListar.addEventListener('click',listar);
        botonMedia.addEventListener('click',media);
        botonMaximo.addEventListener('click',maximo);
        botonSuspenso.addEventListener('click',suspenso);
    }

    function listar(){
        const lista=document.createElement('ul');
        for(const elemento of arrayNotas){
            let elementoLista=document.createElement('li');
            elementoLista.textContent=elemento;
            lista.appendChild(elementoLista);
        }
        divResultado.appendChild(lista);
    }
    function media(){
        let acumulador=0;
        for(i=0;i<5;i++){
            acumulador+=arrayNotas[i];
        }
        alert('La media es '+acumulador/5);
    }
    function maximo(){
        let maximo=0;
        let i=0;
        while(i<5){
            if(maximo<arrayNotas[i]){
                maximo=arrayNotas[i];
            }
            i++;
        }
        alert('La nota máxima es ' + maximo);
    }
    function suspenso(){
        suspenso=false;
        let i=0;
        do{
            if(arrayNotas[i]<5){
                suspenso=true;
                break;
            }
            i++;
        }while(i<5);
        if (suspenso==true){
            alert('Hay algún suspenso');
        }else{
            alert('No Hay ningún suspenso');
        }
    }

})()