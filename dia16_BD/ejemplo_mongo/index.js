const express=require('express');
const {MongoClient}=require('mongodb');

const app=express();

app.set('port',3000);
app.listen(3000);

async function usar() {
    const client=new MongoClient('mongodb://127.0.0.1:27017/mibase');

    try {
        //insertar un nuevo registro
        const conexion=await client.connect();
        const controlador=conexion.db().collection('clientes');

        let respuesta,filas,filtro;

        const nuevoCliente={nombre:'Irene Olmos',
                            genero:0,
                            telefono:627023398,
                            domicilio:'Calle Berlanga 54'
                            };
        respuesta=await controlador.insertOne(nuevoCliente);
        console.log('Insertado: ', respuesta);

        //realizar una consulta
        filas=await controlador.find().toArray();
        console.log('Selección: ', filas);

        //modificar el registro insertado
        const cambiarCliente={$set:{genero:1,telefono:66666666}};
        filtro={nombre:'Irene Olmos'};
        respuesta=await controlador.updateOne(filtro,cambiarCliente);
        console.log('Actualizado: ', respuesta);

        //realizar una consulta
        filtro={genero:1};
        filas=await controlador.find(filtro).toArray();
        console.log('Selección: ', filas);

        //eliminar el registro
        filtro={nombre:'Irene Olmos'};
        respuesta=await controlador.deleteOne(filtro);
        console.log('Eliminado: ', respuesta);

        //realizar una consulta
        filas=await controlador.find().toArray();
        console.log('Selección: ', filas);

    } catch (error) {
        console.log(error);
    }
}

usar();