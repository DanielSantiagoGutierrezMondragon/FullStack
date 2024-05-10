var mysql = require('mysql2');
var express = require('express');
var cors = require('cors');
const app = express();


app.use(cors());

app.get('/data', function(req, res){
    var conexion = mysql.createConnection({
        host: 'localhost',
        database: 'fullstack',
        user: 'root',
        password: ''
    });


    conexion.connect(function(err){
        if(err) throw err;
        conexion.query('SELECT * FROM USUARIO', function(error, result, fields){

            if(error) throw error;
            res.send(result);
            conexion.end();
        });
    });
});


app.listen(3000, function(){
    console.log("App esta escuchando correctamente en el puerto 3000");
});