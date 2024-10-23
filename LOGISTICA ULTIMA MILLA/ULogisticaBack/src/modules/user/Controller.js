const db = require('../../Database/database');

const entidad = 'usuario';

function getAllUser() {
    return db.getAllUser(entidad);
}

function getUserById(id) {
    return db.getUserById(entidad, id);
}

module.exports = {
    getAllUser,
    getUserById
}