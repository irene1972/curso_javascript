(()=>{
    document.addEventListener('DOMContentLoaded',inicioPrograma);

    const botonComedia=document.querySelector('#comedia');
    const botonDrama=document.querySelector('#drama');
    const botonMusical=document.querySelector('#musical');
    const botonCrimen=document.querySelector('#crimen');

    const inputEdad=document.querySelector('#edad_');

    const divResultado=document.querySelector('.resultado');
    

    function inicioPrograma(){
        botonComedia.addEventListener('click',elegirPelicula);
        botonDrama.addEventListener('click',elegirPelicula);
        botonMusical.addEventListener('click',elegirPelicula);
        botonCrimen.addEventListener('click',elegirPelicula);
    }

    function elegirPelicula(e){
        const genero=e.target.textContent.toLowerCase();
        const edad=+inputEdad.value;
        console.log(edad);
        if(edad<13){
            switch(genero){
                case 'comedia':
                    divResultado.innerHTML=`<img src="img.jpg" alt="imagen pelicula">`;
                    console.log('pelicula comedia menores');
                    break;
                case 'drama':
                    console.log('pelicula drama menores');
                    break;
                case 'musical':
                    console.log('pelicula musical menores');
                    break;
                case 'crimen':
                    console.log('pelicula crimen menores');
                    break;
                default:
                    console.log('no hay sugerencia para estos gustos de menores');
            }
        }else if(edad<16){
            switch(genero){
                case 'comedia':
                    console.log('pelicula comedia adolescentes');
                    break;
                case 'drama':
                    console.log('pelicula drama adolescentes');
                    break;
                case 'musical':
                    console.log('pelicula musical adolescentes');
                    break;
                case 'crimen':
                    console.log('pelicula crimen adolescentes');
                    break;
                default:
                    console.log('no hay sugerencia para estos gustos de adolescentes');
            }
        }else{
            switch(genero){
                case 'comedia':
                    console.log('pelicula comedia adultos');
                    break;
                case 'drama':
                    console.log('pelicula drama adultos');
                    break;
                case 'musical':
                    console.log('pelicula musical adultos');
                    break;
                case 'crimen':
                    console.log('pelicula crimen adultos');
                    break;
                default:
                    console.log('no hay sugerencia para estos gustos de adultos');
            }
        }
    }
})()