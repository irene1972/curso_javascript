(()=>{
    document.addEventListener('DOMContentLoaded',inicioPrograma);

    const boton=document.querySelector('#listo');
    const botonReset=document.querySelector('#reset');
    const audioGameOver=document.querySelector('#audioGameOver');
    let contador=30;
    const parrafoTiempo=document.querySelector('#tiempo');
    const interval=setInterval(()=>{
            contador--;
            console.log(contador);
            parrafoTiempo.textContent=contador;
            if (contador===0){
                clearInterval(interval);
                audioGameOver.play();
                alert('Ha consumido su tiempo');

            }
        },1000);

    function inicioPrograma(){
        boton.addEventListener('click',mostrarResultado);
        botonReset.addEventListener('click', reiniciar);
       
    }
    function reiniciar(){
        e.preventDefault();
        location.reload();
    }
    function mostrarResultado(e){
        e.preventDefault();
        clearInterval(interval);
        const modal=document.querySelector('#modal');
        const fecha=new Date();
        const resul=document.querySelector('#resultado');

        const parrafoEspanya=document.querySelector('.primero');
        const inputEspanya=document.querySelector('#espanya');

        const parrafoItalia=document.querySelector('.segundo');
        const inputItalia=document.querySelector('#italia');

        const parrafoFrancia=document.querySelector('.tercero');
        const inputFrancia=document.querySelector('#francia');

        const parrafoInglaterra=document.querySelector('.cuarto');
        const inputInglaterra=document.querySelector('#inglaterra');

        const parrafoAlemania=document.querySelector('.quinto');
        const inputAlemania=document.querySelector('#alemania');

        const p1=parrafoEspanya.textContent;
        const respuesta1=inputEspanya.value;

        const p2=parrafoItalia.textContent;
        const respuesta2=inputItalia.value;

        const p3=parrafoFrancia.textContent;
        const respuesta3=inputFrancia.value;

        const p4=parrafoInglaterra.textContent;
        const respuesta4=inputInglaterra.value;

        const p5=parrafoAlemania.textContent;
        const respuesta5=inputAlemania.value;

        //alert(p1+respuesta1+'<br>'+p2+respuesta2);
        modal.showModal();
        resul.innerHTML=`
                        <p>En un tiempo de: ${30-parrafoTiempo.textContent} segundos</p>
                        <p>${fecha.toLocaleDateString('es-ES')}</p>
                        <p>${p1} ${respuesta1}</p>
                        <p>${p2} ${respuesta2}</p>
                        <p>${p3} ${respuesta3}</p>
                        <p>${p4} ${respuesta4}</p>
                        <p>${p5} ${respuesta5}</p>
                        `;

    }
})()