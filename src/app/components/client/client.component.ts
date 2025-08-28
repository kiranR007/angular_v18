import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { Client } from '../../models/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { ApiResponseModel } from '../../models/class/interface/role';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../reusableComponents/alert/alert.component";
import { MyButtonComponent } from "../../reusableComponents/my-button/my-button.component";

@Component({
  selector: 'app-client',
  imports: [CommonModule, FormsModule, DatePipe, AsyncPipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj:Client = new Client();
  clientList:Client[] = [];
  clientService = inject(ClientService)
  userList$ :Observable<any> = new Observable<any>

  currentdate:Date = new Date();

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();

  }

  loadClient(){
    this.clientService.getAllClient().subscribe((res:ApiResponseModel) => {
      this.clientList = res.data;
    })
  }
  OnsaveClient(data:string){
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:ApiResponseModel)=>{
      if (res.result){
        alert("Client saved sucessfully")
        this.loadClient();
        this.clientObj = new Client();
      }else{
        alert(res.message)
      }
      
    })
  }
  onDelete(id:number){
    const isDelete = confirm("Are you sure to delete?")
    if (isDelete){
        this.clientService.deleteClientById(id).subscribe((res:ApiResponseModel)=>{
        if (res.result){
          alert("Client Deleted sucessfully")
          this.loadClient();
          this.clientObj = new Client();
        }else{
          alert(res.message)
        }
        
      })
    }
    }

    onEdit(data:Client){
      this.clientObj = data;

    }
}
