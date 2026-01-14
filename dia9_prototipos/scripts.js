(()=>{
    document.addEventListener('DOMContentLoaded',iniciarPrograma);

    const automovil=new Automovil('Ford','Focus','rojo','2015','Irene');
    const automovil2=new Automovil('Chevrolet','Camaro','negro','2000','Pepe');
    const automovil3=new Automovil('Toyota','Corola','gris','2008','Manuel');

    const arrayAutos=[automovil,automovil2,automovil3];

    function iniciarPrograma(){
        const botonVender=document.querySelector('#venderAutomovil');
        const botonVerAuto=document.querySelector('#verAuto');
        const botonEncender=document.querySelector('#encender');
        const botonVerAutos=document.querySelector('#verAutos');

        botonVender.addEventListener('click',vender);
        botonVerAuto.addEventListener('click',verAuto);
        botonEncender.addEventListener('click',encender);
        botonVerAutos.addEventListener('click',verAutos);
    }

    function vender(){
        const nuevoPropietario=prompt('Dime el nuevo Propietario');
        automovil.venderAutomovil(nuevoPropietario);
        automovil.verAuto();
    }
    function verAuto(){
        automovil.verAuto();
    }
    function encender(){
        
        automovil.encender();
    }
    function verAutos(){
        for(let auto of arrayAutos){
            auto.verAuto();
        }
        //automovil.verAuto();
        //automovil2.verAuto();
        //automovil3.verAuto();
    }

    function Automovil(marca,modelo,color,anio,titular){
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
        this.anio=anio;
        this.titular=titular;
    }
    Automovil.prototype.venderAutomovil=function(nuevoTitular){
        this.titular=nuevoTitular;
    }
    Automovil.prototype.verAuto=function(){
        const divResul=document.querySelector('.resul');
        const divParrafo=document.createElement('p');
        divParrafo.innerHTML=`${this.marca}-${this.modelo}-${this.color}-${this.anio}-${this.titular}`;
        divResul.appendChild(divParrafo);
    }
    Automovil.prototype.encender=function(){
        alert('El automovil de '+this.titular+' fue encendido');
    }

})()