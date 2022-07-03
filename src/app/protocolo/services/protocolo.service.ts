import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProtocoloModel } from '../models/protocolo';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {

  url:string = "http://localhost:3000/"
  authorization = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user') || '').accessToken : null;
  headers = new HttpHeaders()
  .append('accept', 'application/json')
  .append('content-type', 'application/json')
  .append('authorization', `Bearer ${this.authorization} `)

  constructor(public http: HttpClient) { }

  get(): Promise<ProtocoloModel[]> {
    return this.http.get<ProtocoloModel[]>(`${this.url}protocolos`, {headers: this.headers}).toPromise() as Promise<ProtocoloModel[]>;
  }

  del(id: number): Promise<any> {
    return this.http.delete<ProtocoloModel>(`${this.url}protocolos/${id}`, {headers: this.headers}).toPromise();
  }

  create(animal: ProtocoloModel): Promise<ProtocoloModel> {
    return this.http.post<ProtocoloModel>(`${this.url}protocolos`, animal, {headers: this.headers}).toPromise() as Promise<ProtocoloModel>;
  }

  update(animal: ProtocoloModel): Promise<ProtocoloModel> {
    return this.http.put<ProtocoloModel>(`${this.url}protocolos/${animal.id}`, animal, {headers: this.headers}).toPromise() as Promise<ProtocoloModel>;
  }
}
