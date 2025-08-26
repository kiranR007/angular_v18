import { Component, inject,OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Observable } from 'rxjs';
import { ApiResponseModel, IDesignation } from '../../models/class/interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  designationList:IDesignation[] = [];
  isLoader:boolean = true;
  masterservice = inject(MasterService);

  ngOnInit(): void {
    this.masterservice.getDesignation().subscribe((result:ApiResponseModel) => {
      this.designationList = result.data;
      this.isLoader = false;
    },
  error => {
    alert("api error/network")
  })
  }

  
}
