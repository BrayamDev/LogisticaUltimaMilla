export interface IResponseContact{ 
    error: string,
    status: string,
    msg: string, 
    body: {
        nombre: string,
        asunto: string,
        correo: string,
        clave: string,
        mensaje: string
    }
}