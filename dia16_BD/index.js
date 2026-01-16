const express=require('express');
const app=express();

const mysql=require('./conexion');

app.use(express.json());

//metodo get para consultar un estudiante
/*
app.get('/estudiantes/:dni',(req,res)=>{
    res.send('irene');

    console.log('irene');
    mysql.conexion.query(`SELECT * FROM estudiantes WHERE dni=${req.params.dni}`,function(error,response){
        if(error) throw error;
        res.send(response);
    });
});
*/
app.get('/estudiantes/:dni', (req, res) => {
    const dni = req.params.dni;

    mysql.conexion.query(
        'SELECT * FROM estudiantes WHERE dni = ?',
        [dni],
        (error, results) => {
            if (error) {
                console.error('Error SQL:', error);
                return res.status(500).json({ error: 'Error en la base de datos' });
            }

            res.json(results);
        }
    );
});

//metodo post para agregar un estudiante
app.post('/estudiantes/create',(req,res)=>{
    const estudiante=req.body;

    mysql.conexion.query(
                            'INSERT INTO estudiantes (dni,nombre,correo) VALUES (?,?,?)',
                            [estudiante.dni,estudiante.nombre,estudiante.correo],
                            (error,results)=>{
                                if(error){
                                    console.error('Error SQL:', error);
                                    return res.status(500).json({ error: 'Error en la base de datos' });
                                }
                                res.json(results.insertId);
                            }
    );
});

//metodo post para agregar una nota
app.post('/notas/create',(req,res)=>{
    const nota=req.body;

    mysql.conexion.query(
                            'INSERT INTO notas (dni_estudiante,codigo_curso,nota,fecha) VALUES (?,?,?,?)',
                            [nota.dni,nota.codigo,nota.nota,nota.fecha],
                            (error,results)=>{
                                if(error){
                                    console.error('Error SQL:', error);
                                    return res.status(500).json({ error: 'Error en la base de datos' });
                                }
                                res.json(results.insertId);
                            }
    );
});

//Método PUT para actualizar una nota
app.put('/notas/:id/update', (req, res) => {
    const id = req.params.id;
    const nota=req.body;

    mysql.conexion.query(
        'UPDATE notas SET dni_estudiante=?,codigo_curso=?,nota=?,fecha=? WHERE id = ?',
        [nota.dni,nota.codigo,nota.nota,nota.fecha,id],
        (error, results) => {
            if (error) {
                console.error('Error SQL:', error);
                return res.status(500).json({ error: 'Error en la base de datos' });
            }

            res.json('Examen modificado');
        }
    );
});

//Método Delete para eliminar una nota
app.delete('/notas/:id/delete', (req, res) => {
    const id = req.params.id;

    mysql.conexion.query(
        'DELETE FROM notas WHERE id = ?',
        [id],
        (error, results) => {
            if (error) {
                console.error('Error SQL:', error);
                return res.status(500).json({ error: 'Error en la base de datos' });
            }

            res.json('Nota eliminada');
        }
    );
});

//Método GET para obtener las notas aprobadas
app.get('/notas/:codigo/aprobados', (req, res) => {
    const codigo = req.params.codigo;

    mysql.conexion.query(
        'SELECT * FROM notas WHERE codigo_curso = ? and nota>=5',
        [codigo],
        (error, results) => {
            if (error) {
                console.error('Error SQL:', error);
                return res.status(500).json({ error: 'Error en la base de datos' });
            }

            res.json(results);
        }
    );
});

app.listen(3000, () => {
    console.log("El servidor esta en línea")
});