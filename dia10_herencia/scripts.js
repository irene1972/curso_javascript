(()=>{
    document.addEventListener('DOMContentLoaded',inicioPrograma);

    class Animal{
        constructor(nombre,peso,edad){
            this.nombre=nombre;
            this.peso=peso;
            this.edad=edad;
        }
        informacion(animal){
            let texto='';
            for(let propiedad in animal){
                texto+=animal[propiedad]+' - ';
            }
            return texto.substring(0,texto.length-2);
        }
    }
    class Perro extends Animal{
        constructor(nombre,peso,edad,raza){
            super(nombre,peso,edad);
            this.raza=raza;
        }
        
    }
    class Gato extends Animal{
        constructor(nombre,peso,edad,sexo){
            super(nombre,peso,edad);
            this.sexo=sexo;
        }
        
    }
    class Conejo extends Animal{
        constructor(nombre,peso,edad,color){
            super(nombre,peso,edad);
            this.color=color;
        }
       
    }

    //const animal=new Animal('pajaro','200 gr',2);
    const perro=new Perro('Brau','27 kg',13,'Pastor belga');
    const gato=new Gato('Haku','8 kg',6,'hembra');
    const conejo=new Conejo('Conejo','2 kg',5,'blanco');

    const arrayAnimales=[perro,gato,conejo];

    function inicioPrograma(){
        const botonInfo=document.querySelector('#informacion');

        botonInfo.addEventListener('click',mostrarInformacion);

    }
    function mostrarInformacion(){
        const divResul=document.querySelector('.resul ul');
        
        for(let animal of arrayAnimales){
            const parrafo=document.createElement('li');
            parrafo.textContent=animal.informacion(animal);
            divResul.appendChild(parrafo);
        }
        
    }
    
})()