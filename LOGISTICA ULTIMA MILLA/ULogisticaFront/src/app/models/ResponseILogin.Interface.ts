export interface IResponseLogin{
    error: string,
    status: string,
    msg: string, 
    body: {
        user: string,
        pass: string
    }
}