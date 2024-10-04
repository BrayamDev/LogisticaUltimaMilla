export interface IResponseRegister{
    error: string,
    status: string,
    msg: string, 
    body: {
        usuarioRed: string,
        nombreCompleto: string,
        correo: string,
        clave: string,
        confirmarClave: string
    }
}