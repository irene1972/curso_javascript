//(()=>{
    console.log('irene');

    document.addEventListener('DOMContentLoaded',cargaDatos);

    function cargaDatos(){
        const arrayLista=document.querySelectorAll('#lista li');
        const spinner=document.querySelector('#spinner');

        spinner.classList.remove('oculto');

        let peticiones=[];

        arrayLista.forEach(elem=>{
            
            const baseCotizacion=elem.id;
            
            const peticion=fetch(`https://open.er-api.com/v6/latest/${baseCotizacion}`)
                .then(response=>response.json())
                .then(data=>{
                    console.log(data.rates.EUR);
                    elem.textContent=data.rates.EUR;
                })
                .catch(error=>console.log(error));

            peticiones.push(peticion);

        });

        Promise.all(peticiones)
            .finally(()=>{
                spinner.classList.add('oculto');
            });
        
    }

//})