(()=>{
    document.addEventListener('DOMContentLoaded',()=>pintarHtml(8));

    function pintarHtml(numTiendas){
        const parrafoSalida=document.querySelector('#parrafoSalida');
        const botonCalcular=document.querySelector('#calcular');
        botonCalcular.addEventListener('click',calcular);

        const contenedor=document.querySelector('#itemsTiendas');

        for(let i=1;i<=numTiendas;i++){
            const parrafo=pintarParrafo('ventasTienda','Tienda ',0,i);
            //console.log(pintarParrafo('ventasTienda',',Tienda ',0,i));
            contenedor.appendChild(parrafo);
        }

    }
    function pintarParrafo(nombreId,nombreLabel,min,i){
        const parrafo=document.createElement('p');

        const label=document.createElement('label');
        label.setAttribute('for',nombreId+i);
        label.textContent=nombreLabel+i

        const input=document.createElement('input');
        input.classList.add('tienda');
        input.setAttribute('type','number');
        input.setAttribute('id',nombreId+i);
        input.setAttribute('min',min);
        input.value=0;

        parrafo.appendChild(label);
        parrafo.appendChild(input);

        return parrafo;
    }
    function calcular(){
        const arrayInputTiendas=document.querySelectorAll('.tienda');

        arrayInputTiendas.forEach(input=>{
            input.classList.remove('mayor');
            input.classList.remove('menor');
        });
        
        let acum=0;
        arrayInputTiendas.forEach(input=>{
            const valor=+input.value;
            acum+=valor;
        });
        parrafoSalida.textContent=acum;

        const elMayor=mayor();
        addClassMayor(elMayor);

        const elMenor=menor();
        addClassMenor(elMenor);

    }
    function mayor(){
        const arrayInputTiendas=document.querySelectorAll('.tienda');
        let elMayor=arrayInputTiendas[0].value;
        arrayInputTiendas.forEach(input=>{
            if (input.value>elMayor){
                elMayor=input.value;
            }
        });
        //console.log(elMayor);
        return elMayor;
    }

    function menor(){
        const arrayInputTiendas=document.querySelectorAll('.tienda');
        let elMenor=arrayInputTiendas[0].value;
        arrayInputTiendas.forEach(input=>{
            if (input.value<elMenor){
                elMenor=input.value;
            }
        });
        //console.log(elMenor);
        return elMenor;
    }
    function addClassMayor(mayor){
        const arrayInputTiendas=document.querySelectorAll('.tienda');
        arrayInputTiendas.forEach(input=>{
            console.log(input.value);
            if(input.value===mayor){
                input.classList.add('mayor');
            }
        });
    }
    function addClassMenor(menor){
        const arrayInputTiendas=document.querySelectorAll('.tienda');
        arrayInputTiendas.forEach(input=>{
            console.log(input.value);
            if(input.value===menor){
                input.classList.add('menor');
            }
        });
    }

})()