//Llamar al componente de mysql
const mysql = require('mysql');

//Establecer los parámetros de la conexión
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'universidad'
});
 
//Nos conectamos con la base
conexion.connect((error) => {
    if (error) {
        console.error('Error conectando a MySQL:', error);
        return;
    }
    console.log('Conectado a la base de datos');
});
/*
conexion.connect(function (error) {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});
*/

//Exportamos el objeto con los datos de la conexión
module.exports = { conexion };