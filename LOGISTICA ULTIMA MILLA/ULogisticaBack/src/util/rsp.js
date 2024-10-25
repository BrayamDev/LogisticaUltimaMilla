exports.success=function(req,resp,status,msj){
    resp.status(status).send({
        error: false,
        status: 200,
        msg: msj,
        body: req.body
    })
}

exports.error=function(req,resp,status,msj){
    resp.status(status).send({
        error: true,
        status: status,
        msg: msj,
        body: req.body
    })
}