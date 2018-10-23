import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component23',
  templateUrl: './component23.component.html',
  styleUrls: ['./component23.component.css']
})
export class Component23Component implements OnInit {
   @Output() childEvent = new EventEmitter<string>();
  // fireEvent(){
  //   this.childEvent.emit('yourName');

  // }
  pName='';
  onkeyUp(pName:string){
    this.pName=pName;
    console.log(this.pName);
  }
  linkParent(parentName:string){
    this.childEvent.emit(parentName);

  }

  constructor() { }

  ngOnInit() {
  }

}
