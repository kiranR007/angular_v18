import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/class/Client';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../models/class/interface/role';
import { Constant } from '../components/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT)
  }

  getAllEmployee():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP)
  }

  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllProject():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT)
  }

  addUpdate(obj:Client):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + 'AddUpdateClient',obj)

  }
  deleteClientById(id:number):Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(environment.API_URL + 'DeleteClientByClientId?clientId='+id)

  }

  addClientProjectUpdate(obj:Client):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.API_URL + 'AddUpdateClientProject',obj)

  }

  
}
