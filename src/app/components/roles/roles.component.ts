import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, IRole } from '../../models/class/interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  //string,number,boolean,date,object,null,undefined
  // firstName:string = "Angular Tutorial";
  // angularversion = "Version 18";
  // Version: number = 18;
  // isActive:boolean = false;
  // currentDate:Date =new  Date();
  // inputType:string="button"
  // selectedState :string = "";

  // constructor(private http:HttpClient){}
  http = inject(HttpClient)

  roleList :IRole[] = [];


  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles(){
    this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:ApiResponseModel) =>{
      this.roleList = res.data;
    })
  }



  

  showWelcomeAlert(){
    alert("Hello baddetade")

  }
  showMessage(message:string){
    alert(message)

  }
  
}
