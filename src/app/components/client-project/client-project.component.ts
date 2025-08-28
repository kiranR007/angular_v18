import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { ApiResponseModel,ClientProject,Employee } from '../../models/class/interface/role';
import { Client } from '../../models/class/Client';
import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";



@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, TitleCasePipe, UpperCasePipe, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm:FormGroup = new FormGroup({
    clientProjectId:new FormControl(0),
    projectName:new FormControl("",[Validators.required,Validators.minLength(10)]),
    startDate:new FormControl(""),
    expectedEndDate:new FormControl(""),
    leadByEmpId:new FormControl(""),
    completedDate:new FormControl(""),
    contactPerson:new FormControl(""),
    contactPersonContactNo:new FormControl(""),
    totalEmpWorking:new FormControl(""),
    projectCost:new FormControl(""),
    projectDetails:new FormControl(""),
    contactPersonEmailId:new FormControl(""),
    clientId:new FormControl(""),


  });

  clientSrv = inject(ClientService)
  EmployeeList : Employee[] =[];
  ClientList:Client[] = [];
  
  ProjectList=signal<ClientProject[]>([])

  firstName = signal("Angular 18")

  ngOnInit(): void {
    const name = this.firstName()
    this.getAllClient();
    this.getAllEmployee();
    this.getAllProject();
    
  }

  getAllProject(){
    this.clientSrv.getAllProject().subscribe((res:ApiResponseModel) =>{
      this.ProjectList.set(res.data);
    })
  }
  

  getAllEmployee(){
    this.clientSrv.getAllEmployee().subscribe((res:ApiResponseModel)=>{
        this.EmployeeList = res.data;
    })
  }

  getAllClient(){
    this.clientSrv.getAllClient().subscribe((res:ApiResponseModel)=>{
        this.ClientList = res.data;
    })
  }

OnSaveProject(){
  const formvalue = this.projectForm.value;
  debugger;
  this.clientSrv.addClientProjectUpdate(formvalue).subscribe((res:ApiResponseModel) => {
    if (res.result){
      alert("Project Added Successfully");
    }else{
      alert(res.message);
    }
  })
}
changeFname(){
  this.firstName.set("React JS")
}
}
