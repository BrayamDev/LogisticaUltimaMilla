const mysql = require('mysql')
const config = require('../config')

const databaseConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let connection;
let reintentos;
const maximoIntentos = 0;

function connectionDatabase() {
    connection = mysql.createConnection(databaseConfig);

    connection.connect((error) => {
        if (error) {
            reintentos++;
            console.log(`Error al conectar a la base de datos:  ${error}`);
            if (reintentos >= maximoIntentos)
                process.exit(1);
            setTimeout(connectionDatabase, 200);
        } else {
            console.log('Conexion a la base de datos exitosa');
        }
    })
}

connectionDatabase();

function getAllUser(entidad) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${entidad}`, (error,
            result) => {
            if (error)
                return reject(error)
            return resolve(result);
        })
    });
}

function getUserById(entidad, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${entidad} WHERE id = ?`, [id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}