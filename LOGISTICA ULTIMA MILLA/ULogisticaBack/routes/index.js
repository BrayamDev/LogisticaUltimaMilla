const express = require('express');
const enrutador = express.Router();
const resp = require('../src/util/rsp');
const controller = require('../src/modules/user/Controller');

enrutador.post('/login', (req, res) => {
    resp.success(req, res, 200, 'Exitoso');
});

enrutador.post('/register', (req, res) => {
    resp.success(req, res, 200, 'Exitoso');
});

enrutador.post('/contact', (req, res) => {
    resp.success(req, res, 200, 'Exitoso');
});

enrutador.get('/login', (req, res) => { 
    controller.getAllUser().then((items) => {
        resp.success(req, res, 200, items);
    }).catch(err => {
        resp.error(req, res, 500, err.message);
    });
});

enrutador.get('/login/:id', (req, res) => {
    const userId = req.params.id; 
    controller.getUserById(userId).then((user) => {
        if (user) {
            resp.success(req, res, 200, user);
        } else {
            resp.error(req, res, 404, 'Usuario no encontrado');
        }
    }).catch(err => {
        resp.error(req, res, 500, err.message);
    });
});


module.exports = enrutador;
