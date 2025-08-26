import { CommonModule } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { Client } from '../../models/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { ApiResponseModel } from '../../models/class/interface/role';

@Component({
  selector: 'app-client',
  imports: [CommonModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj:Client = new Client();
  clientList:Client[] = [];
  clientService = inject(ClientService)
  ngOnInit(): void {
    this.loadClient();

  }

  loadClient(){
    this.clientService.getAllClient().subscribe((res:ApiResponseModel) => {
      this.clientList = res.data;
    })
  }
  OnsaveClient(){
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
