(()=>{

    document.addEventListener('DOMContentLoaded',iniciarPrograma);

    const botonMas=document.querySelector('#mas');
    const botonMenos=document.querySelector('#menos');
    const botonPor=document.querySelector('#por');
    const botonEntre=document.querySelector('#entre');

    const botonPotencia=document.querySelector('#potencia');
    const botonRaiz=document.querySelector('#raiz');
    const botonAbsoluto=document.querySelector('#absoluto');
    const botonRandom=document.querySelector('#random');

    const inputResultado=document.querySelector('#resultado');

    const botonRound=document.querySelector('#round');
    const botonFloor=document.querySelector('#floor');
    const botonCeil=document.querySelector('#ceil');

    function iniciarPrograma(){
        botonMas.addEventListener('click',suma);
        botonMenos.addEventListener('click',resta);
        botonPor.addEventListener('click',multiplica);
        botonEntre.addEventListener('click',divide);

        botonPotencia.addEventListener('click',potencia);
        botonRaiz.addEventListener('click',raiz);
        botonAbsoluto.addEventListener('click',absoluto);
        botonRandom.addEventListener('click',random);

        botonRound.addEventListener('click',redondea);
        botonFloor.addEventListener('click',redondeaAbajo);
        botonCeil.addEventListener('click',redondeaArriba);
    }
    function suma(){
        const param1=parseFloat(document.querySelector('#param1').value);
        const param2=parseFloat(document.querySelector('#param2').value);
        pintaResultado(param1+param2);
        //return param1+param2;
    }
    function resta(){
        const param1=parseFloat(document.querySelector('#param1').value);
        const param2=parseFloat(document.querySelector('#param2').value);
        pintaResultado(param1-param2);
        //return param1-param2;
    }
    function multiplica(){
        const param1=parseFloat(document.querySelector('#param1').value);
        const param2=parseFloat(document.querySelector('#param2').value);
        pintaResultado(param1*param2);
        //return param1*param2;
    }
    function divide(){
        const param1=parseFloat(document.querySelector('#param1').value);
        const param2=parseFloat(document.querySelector('#param2').value);
        pintaResultado(param1/param2);
        //return param1/param2;
    }
    function redondea(){
        inputResultado.value=Math.round(inputResultado.value);
        pintaResultado(inputResultado.value);
    }
    function redondeaAbajo(){
        inputResultado.value=Math.floor(inputResultado.value);
        pintaResultado(inputResultado.value);
    }
    function redondeaArriba(){
        inputResultado.value=Math.ceil(inputResultado.value);
        pintaResultado(inputResultado.value);
    }
    function potencia(){
        const param1=parseFloat(document.querySelector('#param1').value);
        const param2=parseFloat(document.querySelector('#param2').value);
        pintaResultado(Math.pow(param1,param2));
    }
    function raiz(){
        const param1=parseFloat(document.querySelector('#param1').value);
        pintaResultado(Math.sqrt(param1));
    }
    function absoluto(){
        const param1=parseFloat(document.querySelector('#param1').value);
        pintaResultado(Math.abs(param1));
    }
    function random(){
        const minimo=parseFloat(document.querySelector('#param1').value);
        let maximo=parseFloat(document.querySelector('#param2').value);
        maximo+=1;
        pintaResultado(Math.floor(Math.random()*(maximo-minimo)+minimo));
    }
    function pintaResultado(valor){
        inputResultado.value=valor;
    }
})()