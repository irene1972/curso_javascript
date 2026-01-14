(()=>{
    document.addEventListener('DOMContentLoaded',cargarDatos);

    function cargarDatos(){
        fetch('resumen.json')
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                const divResul=document.querySelector('.resul');

                const pAbierto=document.createElement('p');
                pAbierto.textContent=data.abierto;
                divResul.appendChild(pAbierto);

                const pBanco=document.createElement('p');
                pBanco.textContent=data.banco;
                divResul.appendChild(pBanco);

                const pCBU=document.createElement('p');
                pCBU.textContent=data.cbu;
                divResul.appendChild(pCBU);

                const pNCuenta=document.createElement('p');
                pNCuenta.textContent=data.nro_cuenta;
                divResul.appendChild(pNCuenta);

                const pSaldoUSD=document.createElement('p');
                pSaldoUSD.textContent=data.saldo[0].monto + ' ' + data.saldo[0].moneda;
                divResul.appendChild(pSaldoUSD);

                const pSaldoEUROS=document.createElement('p');
                pSaldoEUROS.textContent=data.saldo[1].monto + ' ' + data.saldo[1].moneda;;
                divResul.appendChild(pSaldoEUROS);

                const pSucursal=document.createElement('p');
                pSucursal.textContent=data.sucursal;
                divResul.appendChild(pSucursal);

                const pTitular=document.createElement('p');
                pTitular.textContent=data.titular;
                divResul.appendChild(pTitular);

                const pSeparador=document.createElement('p');
                pSeparador.textContent='******************';
                divResul.appendChild(pSeparador);

                for(let propiedad in data){
                    if(propiedad==='saldo'){
                        const parrafo1=document.createElement('p');
                        parrafo1.textContent=`${propiedad}: ${data[propiedad][0].monto} ${data[propiedad][0].moneda}`;
                        divResul.appendChild(parrafo1);

                        const parrafo2=document.createElement('p');
                        parrafo2.textContent=`${propiedad}: ${data[propiedad][1].monto} ${data[propiedad][1].moneda}`;
                        divResul.appendChild(parrafo2);

                    }else{
                        const parrafo=document.createElement('p');
                        parrafo.textContent=`${propiedad}: ${data[propiedad]}`;
                        divResul.appendChild(parrafo);
                    }
                }


            })
            .catch(error=>console.log(error));
    }
})()