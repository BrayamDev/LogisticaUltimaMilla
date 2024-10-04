import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestLogin } from '../models/RequestILogin.Interface';
import { IResponseLogin } from '../models/ResponseILogin.Interface';
import { Observable } from 'rxjs';
import { IResponseRegister } from '../models/ResponseIRegister.Interface';
import { IRequestRegister } from '../models/RequestIRegister.Interface';

import { IResponseContact } from '../models/ResponseIContact.Interfact';
import { IRequestContact } from '../models/RequestIContact.Interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  urlEndpoint: string = 'http://localhost:3200';
  constructor(private http: HttpClient) { }

  login(Datos: IRequestLogin):Observable<IResponseLogin> {
    let url1 = `${this.urlEndpoint}/login`;
    return this.http.post<IResponseLogin>(url1, Datos);
  }

  registrarUsuario(Datos: IRequestRegister):Observable<IResponseRegister> {
    let url2 = `${this.urlEndpoint}/register`;
    return this.http.post<IResponseRegister>(url2, Datos);
  }

  contactUsuario(Datos: IRequestContact):Observable<IResponseContact> {
    let url3 = `${this.urlEndpoint}/contact`;
    return this.http.post<IResponseContact>(url3, Datos);
  }
}
