import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/class/Client';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../models/class/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + 'GetAllClients')

  }

  addUpdate(obj:Client):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + 'AddUpdateClient',obj)

  }
  deleteClientById(id:number):Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(environment.API_URL + 'DeleteClientByClientId?clientId='+id)

  }
}
