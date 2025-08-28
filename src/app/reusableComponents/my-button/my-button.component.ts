import { Component, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
@Input() btnText:string = "";
@Input() btnClass:string = "";


@Output() OnBtnClick = new EventEmitter<any>();

Onclick(){
  debugger;
  this.OnBtnClick.emit("admin")
}

}
