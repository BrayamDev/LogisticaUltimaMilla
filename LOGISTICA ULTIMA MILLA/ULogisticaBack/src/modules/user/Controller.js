const db = require('../../Database/database');
const entidad = 'usuario';

function getAllUser() {
    return db.getAllUser(entidad);
}

function getUserById(userId) {
    return db.getUserById(entidad, userId);
}

module.exports = {
    getAllUser,
    getUserById
};
