const express=require('express')
const enrutador=express.Router()
const resp=require('../src/util/rsp')

enrutador.post('/login', (req,res)=>{
    resp.success(req,res,200,'Exitoso')
})

enrutador.post('/register', (req,res)=>{
    resp.success(req,res,200,'Exitoso')
})

enrutador.post('/contact', (req,res)=>{
    resp.success(req,res,200,'Exitoso')
})

module.exports=enrutador